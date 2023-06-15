import Header from './components/Header';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import Capabilities from './components/Capabilities';
import Team from './components/Team';
import FollowUs from './components/FollowUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import { Outlet } from 'react-router-dom';

import './App.sass';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CaseStudies />
      <Capabilities />
      <Team />
      <Contact />
      <FollowUs />
      <Footer />
      {/*<Outlet />*/}
    </div>
  );
}

export default App;
