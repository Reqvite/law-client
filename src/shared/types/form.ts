import {LabelOptionsI} from '@/shared/types/options';

export enum FormVariantsEnum {
  Input = 'input',
  Select = 'select',
  Text_Area = 'text-area'
}

interface BaseFormOption {
  name?: string;
  id: string;
  inputId: string;
  isRequired?: boolean;
  type?: string;
  min?: number;
  max?: number;
  defaultValue?: string;
  inputType?: string;
}

interface FormOptionVariantMapI {
  [FormVariantsEnum.Input]: {
    variant: FormVariantsEnum.Input;
  };
  [FormVariantsEnum.Text_Area]: {
    variant: FormVariantsEnum.Text_Area;
  };
  [FormVariantsEnum.Select]: {
    variant: FormVariantsEnum.Select;
    options: LabelOptionsI[];
  };
}

export type FormOption<T extends FormVariantsEnum> = BaseFormOption & FormOptionVariantMapI[T];
