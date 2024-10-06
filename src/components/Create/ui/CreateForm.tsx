'use client';
import {Flex} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {useSubmitForm} from '@/shared/lib/hooks';
import {ButtonType} from '@/shared/types/components';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {Form} from '@/shared/ui';

type Props = {
  route?: string;
  options: FormOption<FormVariantsEnum>[];
  submitButton: ButtonType;
  component?: ReactElement;
  transformData?: (_data: any) => void;
};

// const createData = (data: any) => {
//   data.slug = `${slugify(data.title)}-${new Date().getTime()}`;
//   data.publishedAt = null;
// };

export const CreateForm = ({
  submitButton,
  options,
  route = 'articles',
  component: Component,
  transformData
}: Props): ReactElement => {
  const {submitForm, isLoading} = useSubmitForm();
  const formWidth = Component ? {base: '100%', md: '50%'} : '100%';
  const componentWidth = {base: '100%', md: '50%'};
  const defaultValues = options.reduce(
    (acc, option) => {
      acc[option.inputId] = option.defaultValue || '';
      return acc;
    },
    {} as Record<string, any>
  );

  const onSubmit = async (data: any): Promise<void> => {
    let newData = data;
    if (transformData) {
      newData = transformData(data);
    }
    await submitForm(newData, route);
  };

  return (
    <Flex flexDirection={{base: 'column', md: 'row'}} width="100%" gap={3}>
      <Form
        w={formWidth}
        options={options}
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        submitButton={submitButton}
        isLoading={isLoading}
        boxShadow="var(--chakra-shadows-cardShadow)"
        p={5}
        borderRadius={10}
      />
      {Component && <Flex width={componentWidth}>{Component}</Flex>}
    </Flex>
  );
};
