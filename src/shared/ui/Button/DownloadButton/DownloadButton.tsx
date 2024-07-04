'use client';
import {IconButton, IconButtonProps, Text} from '@chakra-ui/react';
import {saveAs} from 'file-saver';
import {MouseEvent, ReactElement} from 'react';
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
  const saveFile = (e: MouseEvent): void => {
    e.stopPropagation();
    saveAs(link, title);
  };
  let component;

  if (variant === 'button') {
    component = (
      <IconButton
        bg="black"
        color="white"
        variant="secondary"
        onClick={(e) => saveFile(e)}
        icon={<IoMdDownload />}
        {...otherProps}
        aria-label="Download file"
      />
    );
  }
  if (variant === 'text') {
    return (
      //@ts-expect-error ///
      <Text _hover={{color: 'black'}} onClick={(e) => saveFile(e)} {...otherProps}>
        Завантажити
      </Text>
    );
  }

  return <Tooltip label="Завантажити">{component}</Tooltip>;
};
