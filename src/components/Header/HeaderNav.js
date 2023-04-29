import useScreen from '../hooks/useScreen';

const HeaderNav = () => {
  const { isMobile } = useScreen(767);

  if (isMobile()) {
    return;
  }

  return (
    <nav className="header-nav">
      <a href="#">
        <span className="header-nav-item">Work</span>
      </a>
      <a href="#">
        <span className="header-nav-item">Company</span>
      </a>
      <a href="#">
        <span className="header-nav-item">Team</span>
      </a>
      <a href="#">
        <span className="header-nav-item">Contact</span>
      </a>
    </nav>
  );
};

export default HeaderNav;
