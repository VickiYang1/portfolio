import React from 'react';
import '../css/page-style.css';
function Homepage() {
  return (
    <div className="page-container">
      <div className="swinging-card">
        <div className="string"></div>
        <div className="ID-card">
          <img src= "/me.png" width={352} height={422}></img>
          </div>
      </div>
      
      <div className="about-container">
        <div className="comment-bubble">
          <div className="bubble-text" style={{fontSize: "40px", fontWeight: "bolder"}}>Hey There!</div>
          <p className="bubble-text">
            My name is Vicki Yang. I am a recent Computer Science graduate from Stony Brook University.<br/><br/>
            I've always loved solving problems and building things that make people’s lives easier.
            I’m especially passionate about combining creativity with technology. Just finding ways to make user experiences not just functional, but meaningful.
            When I’m not coding, you can probably find me exploring new design ideas, learning something new, or working on a side project just for fun!
          </p>
        </div>
      </div>
      <div className="about-container" style={{height:"1400px"}}>
        <div className="sticky-notes"> 

          <div className="sticky-container"style= {{left: "200px", top : "60px"}}> 
            <img src = "/yellow-sticky.png" width={350} height={330}/>
            <div className="sticky-text">
              <div className="subheading" style={{backgroundColor: "#e9c85c"}}> 
                <div > Education</div>
              </div>
              <div> <br/>• Stony Brook University (2021-2025)</div>
              <div> • Bachelors of Science in Computer Science</div>
              <div> • Specialization: Data Science & Machine Learning</div>
            </div>
          </div>

          <div className="sticky-container" style= {{left: "210px", top : "400px"}}> 
            <img src = "/pink-sticky.png" width={340} height={250}/>
            <div className="sticky-text">
              <div className="subheading" style={{backgroundColor: "#F895A4"}}> 
                <div> Languages</div>
              </div>
              <div> <br/>• English</div>
              <div> • Cantonese</div>
            </div>
          </div>

          <div className="sticky-container" style= {{left: "700px", top : "50px"}}> 
            <img src = "/purple-sticky.png" width={350} height={650}/>
            <div className="sticky-text">
              <div className="subheading" style={{backgroundColor: "#C594E3" ,width:"200px"}}> 
                <div> Technical Skills</div>
              </div>
              <div>
                <br/>Programming Languages: <br/> • Python <br/> • Java<br/> • JavaScript<br/> • SQL<br/> • HTML<br/>
                <br/>Office Suite Proficiency: <br/> • Microsoft Suite<br/> • Google Workspace<br/>
                <br/>Design Software Expertise: <br/> • AutoCAD<br/> • Fusion 360<br/> • Blender<br/> • Photoshop 
              </div>
            </div>
          </div>

          <div className="sticky-container" style= {{left: "150px", top : "700px"}}> 
            <img src = "/blue-sticky.png" width={900} height={600}/>
            <div className="sticky-text" style={{width: "700px", left: "120px"}}>
              <div className="subheading" style={{backgroundColor: "#A1DCE9" }}> 
                <div> Experience </div>
              </div>
              <p>
                • Classroom Technology DoIT - Stony Brook, NY 					                                                      January 2023- May 2025 
                <br/>        • Assisted over 100 faculty members with presentation equipment in live teaching situations. 
                <br/>        • Provided live troubleshooting and technical support, resolving 95% of issues on the first contact. 
                <br/>        • Managed the setup and breakdown of AV equipment for building-wide operations. 
                <br/><br/> • Robotic S.T.E.A.M - Brooklyn, NY 				                                                                                  July 2023 - August 2023 
                <br/>        • Instructed and facilitated educational programs focused on Robotics, Science, Technology, 
                <br/>          Engineering, Art, and Mathematics (STEAM). 
                <br/>        • Delivered lessons in programming using platforms such as Scratch and Roblox Studio. 
                <br/>        • Led hands-on robotics projects employing Lego's robotic kits to teach practical engineering 
                <br/>          concepts. 
            
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
