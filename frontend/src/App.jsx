import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Components
import SpaceBackground from './components/SpaceBackground';
import MinimalistBackground from './components/MinimalistBackground';
import QuantumCore from './components/QuantumCore';
import SynthwaveBackground from './components/SynthwaveBackground';
import NeuralNetBackground from './components/NeuralNetBackground';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

// Pages (We will create these next)
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Learning from './pages/Learning';
import Notes from './pages/Notes';
import WorkInProgress from './pages/WorkInProgress';
import ProjectDetails from './pages/ProjectDetails';
function App() {
  const [activeTheme, setActiveTheme] = useState('starfield');

  useEffect(() => {
    if (activeTheme === 'minimalist') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [activeTheme]);

  return (
    <Router>
      {activeTheme === 'starfield' && <SpaceBackground />}
      {activeTheme === 'minimalist' && <MinimalistBackground />}
      {activeTheme === 'quantum' && <QuantumCore />}
      {activeTheme === 'synthwave' && <SynthwaveBackground />}
      {activeTheme === 'neuralnet' && <NeuralNetBackground />}
      <NavigationBar activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
      <div className="content-wrapper d-flex flex-column min-vh-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/wip" element={<WorkInProgress />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
