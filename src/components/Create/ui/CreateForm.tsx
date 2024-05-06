'use client';
import {ReactElement} from 'react';
import {ButtonType} from '@/shared/types/components';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {Form} from '@/shared/ui';
type Props = {
  options: FormOption<FormVariantsEnum>[];
  submitButton: ButtonType;
};

const options: FormOption<FormVariantsEnum>[] = [
  {id: 'title', inputId: 'title', variant: FormVariantsEnum.Input, name: 'Title', isRequired: true},
  {
    id: 'priority',
    inputId: 'priority',
    variant: FormVariantsEnum.Select,
    name: 'Priority',
    options: [
      {value: 1, label: 'some'},
      {value: 2, label: 'some1'}
    ],
    isRequired: true
  }
];

export const CreateForm = ({submitButton}: Props): ReactElement => {
  const onSubmit = (data: any) => {};

  return (
    <Form
      options={options}
      defaultValues={{title: '', priority: 1}}
      onSubmit={onSubmit}
      submitButton={submitButton}
    />
  );
};
