'use client';
import {Box, BoxProps, Button, Stack} from '@chakra-ui/react';
import {ElementType, ReactElement} from 'react';
import {DefaultValues, FieldValues, Resolver, useForm} from 'react-hook-form';
import {ButtonType} from '@/shared/types/components';
import {FormOption, FormVariantsEnum} from '../../../types/form';
import {renderFormBlock} from '../model/renderFormBlock.service';
import {FormHeader} from './FormHeader';

type Props<T> = BoxProps & {
  heading?: string;
  options: FormOption<FormVariantsEnum>[];
  formValidationSchema?: Resolver<any>;
  defaultValues: T;
  onSubmit: (data: T) => void;
  transformData?: (data: T) => void;
  isLoading?: boolean;
  withCancel?: boolean;
  onCancel?: () => void;
  ButtonComponent?: ElementType;
  submitButton?: ButtonType;
};

export const Form = <T extends FieldValues>({
  heading,
  options,
  formValidationSchema,
  onSubmit,
  transformData,
  defaultValues,
  isLoading,
  onCancel,
  ButtonComponent,
  submitButton,
  ...otherProps
}: Props<T>): ReactElement => {
  const {handleSubmit, reset, control, getValues} = useForm<T>({
    resolver: formValidationSchema,
    defaultValues: defaultValues as DefaultValues<T>
  });

  const handleFormSubmit = handleSubmit(() => {
    const formData = getValues();
    const transformedData = transformData ? transformData(formData) : formData;
    onSubmit(transformedData!);
    reset();
  });

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    reset();
  };

  return (
    <Box {...otherProps}>
      {heading && <FormHeader heading={heading} />}
      <Box as="form" onSubmit={handleFormSubmit}>
        <Stack gap={3}>
          {options.map((option) => renderFormBlock<T>({option, control}))}
          <Stack direction="row" spacing={2} justify="flex-end">
            {ButtonComponent ? (
              <ButtonComponent type="submit" isLoading={isLoading} />
            ) : (
              <Button type="submit" variant={submitButton?.variant} isLoading={isLoading}>
                {submitButton?.label || 'Submit'}
              </Button>
            )}
            {onCancel && (
              <Button variant="secondary" onClick={handleCancel}>
                Cancel
              </Button>
            )}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
