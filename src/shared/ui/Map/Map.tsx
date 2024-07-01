import React, {ReactElement} from 'react';

interface MapFrameProps {
  address: string;
}

export const MapFrame = ({address}: MapFrameProps): ReactElement => {
  return (
    <iframe
      width="100%"
      height="400px"
      src={address}
      allowFullScreen
      aria-hidden="false"
      loading="lazy"
    />
  );
};
