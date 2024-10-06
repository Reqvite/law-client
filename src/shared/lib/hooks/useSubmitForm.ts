import {useState} from 'react';
import {toast} from 'react-toastify';
import {getStrapiURL} from '@/shared/api/api-helpers';
interface UseSubmitFormProps {
  message: string;
}

export const useSubmitForm = (
  {message}: UseSubmitFormProps = {message: 'Ми отримали ваш запит.'}
) => {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<undefined | string>(undefined);

  const submitForm = async (values: unknown, route: string): Promise<unknown> => {
    setIsLoading(true);
    setError(undefined);
    try {
      const resp = await fetch(getStrapiURL() + `/api/${route}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({data: values})
      });
      const data = await resp.json();
      if (!resp.ok) {
        throw new Error(data.error.message);
      }
      setIsLoading(false);
      toast.success(message);
      return data;
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
        toast.error(e.message);
      } else {
        setError('An unknown error occurred');
        toast.error('An unknown error occurred');
      }
      setIsLoading(false);
    }
  };
  return {error, isLoading, submitForm};
};
