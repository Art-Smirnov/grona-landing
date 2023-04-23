import Header from './components/Header';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';

import './App.sass';
import Capabilities from './components/Capabilities';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CaseStudies />
      <Capabilities />
    </div>
  );
}

export default App;
