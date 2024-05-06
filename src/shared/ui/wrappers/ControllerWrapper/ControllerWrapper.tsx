'use client';

import {ElementType, ReactElement} from 'react';
import {Control, Controller, FieldValues, Path} from 'react-hook-form';
import {FormOption, FormVariantsEnum} from '../../../types/form';
import {Input} from '../../Input/Input';
import {getProps} from './model/getProps';

interface Props<T extends FieldValues> {
  option: FormOption<FormVariantsEnum>;
  control: Control<T>;
  InputComponent?: ElementType;
}

export const ControllerWrapper = <T extends FieldValues>({
  option,
  control,
  InputComponent = Input
}: Props<T>): ReactElement => {
  return (
    <Controller
      control={control}
      name={option.inputId as Path<T>}
      render={({field, fieldState: {error}}) => (
        <InputComponent error={error?.message} {...getProps<T>({option, control})} {...field} />
      )}
    />
  );
};
