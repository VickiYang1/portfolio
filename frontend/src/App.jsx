import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import BookRoom from './components/bookRoom.jsx';
import AboutMe from './components/AboutMe.jsx';
import HeroRoom from './components/heroRoom.jsx';
import ArmoryRoom from './components/armoryRoom.jsx';
import Cat from './components/cat.jsx';
import Start from './components/start.jsx';

function App() {
  return (
    <Router> {/* ✅ NO basename here */}
      <MainRoutes />
    </Router>
  );
}

function MainRoutes() {
  const location = useLocation();
  console.log("Current path:", location.pathname);

  return (
    <>
      {location.pathname !== '/' && <Cat />}
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/bookRoom" element={<BookRoom />} />
        <Route path="/heroRoom" element={<HeroRoom />} />
        <Route path="/armoryRoom" element={<ArmoryRoom />} />
      </Routes>
    </>
  );
}

export default App;
