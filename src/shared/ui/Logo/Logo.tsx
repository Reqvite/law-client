import {ReactElement} from 'react';
import {AppLink} from '../AppLink/AppLink';
import {Image} from '../Image';

type LogoProps = {
  logoUrl: string | null;
  logoText?: string | null;
};
export const Logo = ({logoUrl, logoText}: LogoProps): ReactElement => {
  return (
    <AppLink variant="link" href="/">
      <Image
        src={logoUrl || ''}
        width={59}
        height={59}
        borderRadius="50%"
        alt="Logo"
        marginRight={3}
      />
      <p>{logoText}</p>
    </AppLink>
  );
};
