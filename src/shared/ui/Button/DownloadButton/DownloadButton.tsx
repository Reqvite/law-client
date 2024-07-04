'use client';
import {IconButton, IconButtonProps, Text} from '@chakra-ui/react';
import {saveAs} from 'file-saver';
import {ReactElement} from 'react';
import {IoMdDownload} from 'react-icons/io';
import {Tooltip} from '../../Tooltip';
type Props = Omit<IconButtonProps, 'aria-label'> & {
  link: string;
  title?: string;
  variant?: 'button' | 'text';
};

export const DownloadButton = ({
  link = '',
  title,
  variant = 'button',
  ...otherProps
}: Props): ReactElement => {
  const saveFile = (): void => {
    saveAs(link, title);
  };
  let component;

  if (variant === 'button') {
    component = (
      <IconButton
        bg="black"
        color="white"
        variant="secondary"
        onClick={() => saveFile()}
        icon={<IoMdDownload />}
        {...otherProps}
        aria-label="Download file"
      />
    );
  }
  if (variant === 'text') {
    return <Text onClick={() => saveFile()}>Завантажити</Text>;
  }

  return <Tooltip label="Завантажити">{component}</Tooltip>;
};
