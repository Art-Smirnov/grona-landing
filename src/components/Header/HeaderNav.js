import PropTypes from 'prop-types';
import squish from '../../hepers/ClassNameHelper';
import useScreen from '../hooks/useScreen';

const HeaderNav = ({ isSideBar, onCloseSideBar }) => {
  const { isMobile } = useScreen(767);

  if (isMobile() && !isSideBar) {
    return null;
  }

  const handleClick = () => {
    if (isSideBar) {
      onCloseSideBar();
    }
  };

  return (
    <nav
      className={squish`
        header-nav 
        ${isSideBar ? 'side-bar' : ''}
      `}
    >
      <a className="header-nav-link" href="#case-studies" onClick={handleClick}>
        <span className="header-nav-item">Cases</span>
      </a>
      <a className="header-nav-link" href="#capabilities" onClick={handleClick}>
        <span className="header-nav-item">Capabilities</span>
      </a>
      <a className="header-nav-link" href="#team" onClick={handleClick}>
        <span className="header-nav-item">Team</span>
      </a>
      <a className="header-nav-link" href="#contact" onClick={handleClick}>
        <span className="header-nav-item">Contact</span>
      </a>
    </nav>
  );
};

HeaderNav.propTypes = {
  isSideBar: PropTypes.bool,
  onCloseSideBar: PropTypes.func,
};

export default HeaderNav;
