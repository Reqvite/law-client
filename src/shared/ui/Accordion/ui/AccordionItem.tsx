import {AccordionButton, AccordionIcon, AccordionPanel, Box, Heading, Text} from '@chakra-ui/react';
import {BlocksContent} from '@strapi/blocks-react-renderer';
import {ReactElement} from 'react';
import {getStrapiMedia} from '@/shared/api/api-helpers';
import {FileDataAttributesType} from '@/shared/types/components';
import {LawBlockRendered} from '../../BlocksRenderer';
import {DownloadButton} from '../../Button/DownloadButton';

type Props = {
  title: string;
  description: string | BlocksContent;
  file?: FileDataAttributesType;
};

export const AppAccordionItem = ({title, description, file}: Props): ReactElement => {
  const isBlocks = typeof description === 'object';
  return (
    <>
      <Heading as="h3">
        <AccordionButton
          _expanded={{bg: 'var(--chakra-colors-accentColor)', color: 'white'}}
          position="relative"
        >
          <Box as="span" flex="1" textAlign="left">
            {title}
          </Box>
          {file && (
            <DownloadButton mr={2} variant="text" title={title} link={getStrapiMedia(file?.url)} />
          )}
          <AccordionIcon />
        </AccordionButton>
      </Heading>
      <AccordionPanel pb={4}>
        {isBlocks ? <LawBlockRendered description={description} /> : <Text>{description}</Text>}
      </AccordionPanel>
    </>
  );
};
