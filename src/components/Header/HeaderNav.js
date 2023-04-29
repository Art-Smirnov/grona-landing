import useScreen from '../hooks/useScreen';

const HeaderNav = () => {
  const { isMobile } = useScreen(767);

  if (isMobile()) {
    return;
  }

  const handleClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="header-nav">
      <a href="#case-studies">
        <span className="header-nav-item">Work</span>
      </a>
      <a href="#capabilities">
        <span className="header-nav-item">Company</span>
      </a>
      <a href="#team" onClick={handleClick}>
        <span className="header-nav-item">Team</span>
      </a>
      <a href="#contact" onClick={handleClick}>
        <span className="header-nav-item">Contact</span>
      </a>
    </nav>
  );
};

export default HeaderNav;
