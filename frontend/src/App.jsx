import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Title from './components/Title.jsx';
import Homepage from './components/Homepage.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';

function App() {
  return (
    <Router>
      <div>
        <Title />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
