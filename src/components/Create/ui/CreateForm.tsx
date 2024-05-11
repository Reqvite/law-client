'use client';
import {ReactElement} from 'react';
import slugify from 'slugify';
import {useSubmitForm} from '@/shared/lib/hooks';
import {ButtonType} from '@/shared/types/components';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {Form} from '@/shared/ui';
type Props = {
  options: FormOption<FormVariantsEnum>[];
  submitButton: ButtonType;
};

// const options: FormOption<FormVariantsEnum>[] = [
//   {id: 'title', inputId: 'title', variant: FormVariantsEnum.Input, name: 'Title', isRequired: true},
//   {
//     id: 'priority',
//     inputId: 'priority',
//     variant: FormVariantsEnum.Select,
//     name: 'Priority',
//     options: [
//       {value: 1, label: 'some'},
//       {value: 2, label: 'some1'}
//     ],
//     isRequired: true
//   }
// ];

export const CreateForm = ({submitButton, options}: Props): ReactElement => {
  const {submitForm, isLoading} = useSubmitForm();

  const onSubmit = async (data: any) => {
    data.slug = `${slugify(data.title)}-${new Date().getTime()}`;
    data.publishedAt = null;
    await submitForm(data, 'articles');
  };

  return (
    <Form
      options={options}
      defaultValues={{title: '', select: 1, description: ''}}
      onSubmit={onSubmit}
      submitButton={submitButton}
      isLoading={isLoading}
    />
  );
};
