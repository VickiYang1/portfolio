import { Link } from 'react-router-dom';
import '../css/Navbar-style.css';

function Navbar() {
  return (
    <div className="bar">
      <Link to="/"className="btn">About Me </Link>
      <Link to="/resume" className="btn">Resume</Link>
      <Link to="/projects" className="btn">Projects</Link>
      <Link to="/contact" className="btn">Contact</Link>
    </div>
  );
}

export default Navbar;