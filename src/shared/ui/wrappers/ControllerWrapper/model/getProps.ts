/* eslint-disable @typescript-eslint/no-unused-vars */
import {ElementType} from 'react';
import {Control, FieldValues} from 'react-hook-form';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {LabelOptionsI} from '@/shared/types/options';

interface BasePropsI<T extends FieldValues> {
  required?: boolean;
  type?: string;
  label?: string;
  placeholder?: string;
  max?: number;
  min?: number;
  options?: LabelOptionsI[];
  control?: Control<T>;
  styleVariant?: string;
  iconComponent?: ElementType;
}

export const getProps = <T extends FieldValues>({
  option,
  control
}: {
  option: FormOption<FormVariantsEnum>;
  control: Control<T>;
}) => {
  const variant = option.variant;
  let baseProps: BasePropsI<T> = {
    required: option.isRequired,
    type: option.type,
    label: option.name,
    placeholder: option.name,
    max: option.max,
    min: option.min
  };

  if (variant === FormVariantsEnum.Select) {
    baseProps = {...baseProps, options: option.options};
  }

  return baseProps;
};
