import { ReactComponent as AppLogo } from '../images/grona_logo.svg';

import './Header.sass';

const Header = () => {
  // const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  //
  // const animateIt = (e) => {
  //   const span = e.currentTarget.querySelector('span');
  //   const { offsetX: x, offsetY: y } = e.nativeEvent;
  //   const { offsetWidth: width, offsetHeight: height } = e.currentTarget;
  //
  //   const move = 10;
  //   const xMove = (x / width) * (move * 2) - move;
  //   const yMove = (y / height) * (move * 2) - move;
  //
  //   span.style.transform = `translate(${xMove}px, ${yMove}px)`;
  //
  //   if (e.type === 'mouseleave') span.style.transform = '';
  // };
  //
  // const editCursor = (e) => {
  //   setCursorPos({ x: e.clientX, y: e.clientY });
  // };

  return (
    <div className="container header">
      <AppLogo className="header-logo" />
      <nav className="header-nav">
        <a href="#">
          <span>Work</span>
        </a>
        <a href="#">
          <span>Company</span>
        </a>
        <a href="#">
          <span>Team</span>
        </a>
        <a href="#">
          <span>Contact</span>
        </a>
      </nav>
    </div>
  );
};

export default Header;
