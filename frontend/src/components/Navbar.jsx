import { Link} from 'react-router-dom';
import { useState } from 'react';
import '../css/Navbar-style.css';

function Navbar() {
  const [selectedTab, selectedTabTab] = useState("about");

  return (
    <div className="bar">
      <Link 
        to="/"className={`btn ${selectedTab ==="about"?  "selected" : ""}`} onClick={() => selectedTabTab("about")}>About Me </Link>
      <Link to="/resume" className={`btn ${selectedTab ==="resume"? "selected" : ""}`} onClick={() => selectedTabTab("resume")}>Resume</Link>
      <Link to="/projects" className={`btn ${selectedTab==="project"?  "selected" : ""}`} onClick={() => selectedTabTab("project")}>Projects</Link>
      <Link to="/contact" className={`btn ${selectedTab ==="contact"?  "selected" : ""}`} onClick={() => selectedTabTab("contact")}>Contact</Link>
    </div>
  );
}

export default Navbar;