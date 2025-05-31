import '../css/page-style.css';
import { useEffect, useState } from 'react';

function SkillItem( {src, label}){
  return(
    <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
      <img className="image-bubble" src={src} width={30} height={30} alt={label} />
      <div>{label}</div>
    </div>
  )
}
function Homepage() {

   const [swingInView, setSwingInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.5;
      const card = document.querySelector(".swinging-card");

      if (card) {
        const rect = card.getBoundingClientRect();
        if (rect.top < triggerPoint) {
          setSwingInView(true);
        };
      };
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[])
  return (
    <div className="page-container">

      <div className={`swinging-card ${swingInView ? "animate-swing" : ""}`}>
        <div className="string"></div>
        <div className="ID-card">
          <img src= "/me.png" width={352} height={422}></img>
          </div>
      </div>
      
      <div className="about-container">
        <div className="triangle-left"></div>
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
            <img src = "/pink-sticky.png" width={350} height={330}/>
            <div className="sticky-text">
              <div className="subheading" style={{backgroundColor: "#F895A4"}}> 
                <div style={{fontWeight:"bolder"}}> Education</div>
              </div>
              <div> <br/>• Stony Brook University (2021-2025)</div>
              <div> • Bachelors of Science in Computer Science</div>
              <div> • Specialization: Data Science & Machine Learning</div>
            </div>
          </div>

          <div className="sticky-container" style= {{left: "210px", top : "400px"}}> 
            <img src = "/yellow-sticky.png" width={340} height={250}/>
            <div className="sticky-text">
              <div className="subheading" style={{backgroundColor: "#e9c85c"}}> 
                <div style={{fontWeight:"bolder"}}> Languages</div>
              </div>
              <div> <br/>• English</div>
              <div> • Cantonese</div>
            </div>
          </div>

          <div className="sticky-container" style= {{left: "700px", top : "50px"}}> 
            <img src = "/purple-sticky.png" width={350} height={700}/>
            <div className="sticky-text">
              <div className="subheading" style={{backgroundColor: "#C594E3" ,width:"200px"}}> 
                <div style={{fontWeight:"bolder"}}> Technical Skills</div>
              </div>
              
              <div style={{fontWeight: "bolder"}}> Programming Languages </div>
              <div className="design-container">
                <SkillItem src="python.png" label="Python" />
                <SkillItem src="js.png" label="JavaScript" />
                <SkillItem src="c.png" label="C" />
                <SkillItem src="sql.png" label="SQL" />
                <SkillItem src="html.png" label="HTML" />
              </div>

              <div style={{fontWeight: "bolder"}}> Office Suite Proficiency </div>
              <div className="design-container">
                <SkillItem src="microsoft.png" label="Microsoft Office" />
                <SkillItem src="google.png" label="Google Workspace" />
              </div>

              <div style={{fontWeight: "bolder"}}> Design Software Expertise </div>
              <div className="design-container">
                <div style={{display:"flex", gap:"15px"}}>
                  <img className="image-bubble" src = "/autocad.png" width={50} height={50}/>
                  <img className="image-bubble" src = "/fusion.png" width={50} height={50}/>
                  <img className="image-bubble" src = "/blender.png" width={55} height={50}/>
                </div>
                <div style={{display:"flex", gap:"15px"}}>
                  <img className="image-bubble" src = "/photoshop.png" width={50} height={50}/>
                  <img className="image-bubble" src = "/premiere.png" width={50} height={50}/>
                </div>
              </div>

            </div>
          </div>

          <div className="sticky-container" style= {{left: "150px", top : "750px"}}> 
            <img src = "/blue-sticky.png" width={900} height={400}/>
            <div className="sticky-text" style={{width: "700px", left: "120px"}}>
              <div className="subheading" style={{backgroundColor: "#A1DCE9" }}> 
                <div> Experience </div>
              </div>
              <div>
                <div> 2025</div>
                <div> 2023</div>
              </div>
              <div>
                <div> Classroom Support Assistant</div>
                <div> Provided live troubleshooting and technical support</div>
                <div> Coding Instructor Assistant</div>
                <div> Instructed and facilitated educational programs focused on Robotics</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
