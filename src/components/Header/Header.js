import { ReactComponent as AppLogo } from '../images/grona_logo.svg';
import { ReactComponent as Burger } from '../images/burger.svg';
import HeaderLinks from './HeaderLinks';
import HeaderNav from './HeaderNav';
import useScreen from '../hooks/useScreen';

import './Header.sass';

const Header = () => {
  const { isMobile } = useScreen(767);

  return (
    <div className="container header">
      <AppLogo className="header-logo" />
      <HeaderNav />
      <HeaderLinks />
      {isMobile() && <Burger />}
    </div>
  );
};

export default Header;
