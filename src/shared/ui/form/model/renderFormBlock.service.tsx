import {ReactElement} from 'react';
import {Control, FieldValues} from 'react-hook-form';
import {FormOption, FormVariantsEnum} from '../../../types/form';
import {Select} from '../../Select';
import {Textarea} from '../../TextArea';
import {ControllerWrapper} from '../../wrappers';

type Props<T extends FieldValues> = {
  option: FormOption<FormVariantsEnum>;
  control: Control<T>;
};

export const renderFormBlock = <T extends FieldValues>({
  option,
  control
}: Props<T>): ReactElement => {
  switch (option.variant) {
    case FormVariantsEnum.Input:
      return <ControllerWrapper key={option.inputId} option={option} control={control} />;
    case FormVariantsEnum.Text_Area:
      return (
        <ControllerWrapper
          InputComponent={Textarea}
          key={option.inputId}
          option={option}
          control={control}
        />
      );
    case FormVariantsEnum.Select:
      return (
        <ControllerWrapper
          InputComponent={Select}
          key={option.inputId}
          option={option}
          control={control}
        />
      );
  }
};
