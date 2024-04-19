'use client';
import 'react-toastify/dist/ReactToastify.css';
import '@/global/styles/alert.css';
import {useColorMode} from '@chakra-ui/react';
import {ToastContainer} from 'react-toastify';

type position =
  | 'top-center'
  | 'top-right'
  | 'top-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'bottom-left';

type AlertProps = {
  duration?: number;
  position?: position;
};
export const Alert = (props: AlertProps) => {
  const {duration = 3000, position = 'top-right', ...otherProps} = props;
  const {colorMode} = useColorMode();

  return (
    <ToastContainer
      {...otherProps}
      position={position}
      autoClose={duration}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={true}
      theme={colorMode}
    />
  );
};
