import Header from './components/Header';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import Capabilities from './components/Capabilities';
import Team from './components/Team';

import './App.sass';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CaseStudies />
      <Capabilities />
      <Team />
    </div>
  );
}

export default App;
