import {useState} from 'react';
import {toast} from 'react-toastify';
import {getStrapiURL} from '@/shared/api/api-helpers';

export const useSubmitForm = () => {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const submitForm = async (values: any, route: string) => {
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
      toast.success(data.data.attributes.message);
      return data;
    } catch (e: any) {
      setError(e.message);
      setIsLoading(false);
    }
  };
  return {error, isLoading, submitForm};
};
