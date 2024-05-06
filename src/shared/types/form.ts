import {LabelOptionsI} from '@/shared/types/options';

export enum FormVariantsEnum {
  Input = 'input',
  Select = 'select'
}

interface BaseFormOption {
  name?: string;
  id: string;
  inputId: string;
  isRequired?: boolean;
  type?: string;
  min?: number;
  max?: number;
}

interface FormOptionVariantMapI {
  [FormVariantsEnum.Input]: {
    variant: FormVariantsEnum.Input;
  };
  [FormVariantsEnum.Select]: {
    variant: FormVariantsEnum.Select;
    options: LabelOptionsI[];
  };
}

export type FormOption<T extends FormVariantsEnum> = BaseFormOption & FormOptionVariantMapI[T];
