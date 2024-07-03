'use client';
import {IconButton, IconButtonProps} from '@chakra-ui/react';
import {saveAs} from 'file-saver';
import {ReactElement} from 'react';
import {IoMdDownload} from 'react-icons/io';
import {Tooltip} from '../../Tooltip';
type Props = Omit<IconButtonProps, 'aria-label'> & {
  link: string;
};

export const DownloadButton = ({link, ...otherProps}: Props): ReactElement => {
  const saveFile = (): void => {
    saveAs(link);
  };
  return (
    <Tooltip label="Завантажити">
      <IconButton
        variant="primary"
        onClick={() => saveFile()}
        icon={<IoMdDownload />}
        {...otherProps}
        aria-label="Download file"
      />
    </Tooltip>
  );
};
