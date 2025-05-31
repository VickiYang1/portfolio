import React from 'react';
import '../css/page-style.css';
function Resume() {
  return (
    <div className="page-container" style={{marginTop: "5%", marginBottom: "5%"}}>
      <img 
      src = "/2025-Resume.png" 
      width={700} 
      onClick={() => window.open('https://drive.google.com/file/d/1uCmTM6Tzub-uvgjb2J_hSOt2_k_ytwSg/view?usp=sharing', '_blank')}></img>
    </div>
  );
}
export default Resume;
