import { useState } from 'react';
import { ReactComponent as AppLogo } from '../images/grona_logo.svg';
import { ReactComponent as Burger } from '../images/burger.svg';
import HeaderLinks from './HeaderLinks';
import HeaderNav from './HeaderNav';
import SideBar from './SideBar';
import useScreen from '../hooks/useScreen';

import './Header.sass';

const Header = () => {
  const { isMobile } = useScreen(767);
  const [isOpenSideBar, setOpenIsSideBar] = useState(false);

  const toggleDrawer = () => {
    setOpenIsSideBar(!isOpenSideBar);
  };

  return (
    <div className="container header">
      <AppLogo className="header-logo" />
      <HeaderNav />
      <HeaderLinks />
      {isMobile() && (
        <button className="header-burger-button" onClick={toggleDrawer}>
          <Burger />
        </button>
      )}
      {isOpenSideBar && <SideBar onClose={toggleDrawer} />}
    </div>
  );
};

export default Header;
