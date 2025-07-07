import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import BookRoom from './components/bookRoom.jsx';
import AboutMe from './components/AboutMe.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/bookRoom" element={<BookRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
