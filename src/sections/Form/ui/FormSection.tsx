import {Heading} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {CreateForm} from '@/components/Create';
import {ButtonType} from '@/shared/types/components';
import {Section} from '@/shared/ui';
type Props = {
  data: {
    title: string;
    description: string;
    submitButton: ButtonType;
  };
};

export const FormSection = ({data}: Props): ReactElement => {
  return (
    <Section>
      <Heading>{data?.title}</Heading>
      <CreateForm options={data?.options} submitButton={data.submitButton} />
    </Section>
  );
};
