import {Heading} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {CreateForm} from '@/components/Create';
import {ButtonType} from '@/shared/types/components';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {Section} from '@/shared/ui';
import {MapFrame} from '@/shared/ui/Map';

type Props = {
  options: FormOption<FormVariantsEnum>[];
  submitButton: ButtonType;
  title: string;
  mapAddress: string;
};

export const ContactUs = ({submitButton, title, options, mapAddress}: Props): ReactElement => {
  return (
    <Section>
      <Heading as="h2">{title}</Heading>
      <CreateForm
        route="contact-us-submifssions"
        options={options}
        submitButton={submitButton}
        component={<MapFrame address={mapAddress} />}
      />
    </Section>
  );
};
