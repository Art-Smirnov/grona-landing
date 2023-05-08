import Header from './components/Header';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import Capabilities from './components/Capabilities';
import Team from './components/Team';
import FollowUs from './components/FollowUs';
import Footer from './components/Footer';

import './App.sass';
import Contact from './components/Contact/xContact';

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
    </div>
  );
}

export default App;
