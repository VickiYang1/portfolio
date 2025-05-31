import React from 'react';
import '../css/page-style.css';
import '../css/Contact-style.css';

function Contact() {
  return (
    <div className="page-container">
      <div style={{fontSize:"100px", fontWeight:"bolder"}}> Contact Me</div>
      
      <div className="button-container">
        <div className="contact-btns" onClick={() => window.location.href = "mailto:VickiYang0327@gmail.com"}>
          <img src = "/Email.png" width={50}></img>
          <div> VickiYang0327@gmail.com</div>
        </div>
        <div className="contact-btns" onClick={() => window.open('https://github.com/VickiYang1', '_blank')}>
          <img src = "/github.png" width={50}></img>
          <div> VickiYang1</div>
        </div>
        <img className="contact-btns" onClick={() => window.open('https://www.linkedin.com/in/vicki-yang21/', '_blank')} src = "/linkedin.png" width={100}></img>
      </div>

      <input className="small-input" type = "text" placeholder = "Enter Your Email"></input>
      <input className="small-input" type = "text" placeholder = "Enter Subject"></input>
      <input className="big-input" type = "text" placeholder = "Enter your Message"></input>

      <button className="send-btn"> Send </button>
    </div>
  );
}

export default Contact;
