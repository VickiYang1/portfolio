import '../css/aboutMe.css';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const base = import.meta.env.BASE_URL; 

function AboutMe() {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);
  const [frame, setFrame]   = useState(1);
  const [playing, setPlaying] = useState(false);
  const [plaque,  setPlaque]  = useState(false);
  const [open,    setOpen]    = useState(false);
  const frameCount = 4;
  const intervalRef = useRef(null);

  const playSound = file => new Audio(`${base}sounds/${file}`).play();

  const handleArrow = dir => {
    if (fadeOut) return;
    playSound('walking.mp3');
    setFadeOut(true);
    setTimeout(() => navigate(dir), 500);
  };

  const handleClick = () => {
    if (playing) return;
    setFrame(open ? frameCount : 1);
    setPlaying(true);
  };

  const plaqueClick = () => {
    playSound('select.mp3');
    setPlaque(p => !p);
  };

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const openS  = () => playSound('curtain-open.mp3');
    const closeS = () => playSound('curtain-close.mp3');

    if (!playing) return;
    intervalRef.current = setInterval(() => {
      setFrame(prev => {
        if (!open) {
          if (prev >= frameCount) { clearInterval(intervalRef.current); setPlaying(false); setOpen(true);  openS();  return prev; }
          return prev + 1;
        } else {
          if (prev <= 1)         { clearInterval(intervalRef.current); setPlaying(false); setOpen(false); closeS(); return prev; }
          return prev - 1;
        }
      });
    }, 100);

    return () => clearInterval(intervalRef.current);
  }, [playing, open]);

  return (
    <>
      <div className={`fade-overlay ${fadeIn || fadeOut ? 'show' : ''}`} />
      <div className="aboutMe-container">
        <div className="title">
          <img src={`${base}titleBanner1.png`} height={60} />
        </div>

        <div className="information-container">
          <img
            className="plaque clickable"
            onClick={plaqueClick}
            src={`${base}AboutMePlaque.png`}
            width={220}
            height={100}
          />

          {plaque && (
            <div className="popup-overlay" onClick={() => setPlaque(false)}>
              <img
                src={`${base}plaque1-large.png`}
                alt="Opened Plaque"
                className="popup-image"
              />
            </div>
          )}

          <img
            className="clickable curtains"
            src={`${base}curtains/curtain${frame}.png`}
            alt="Curtain Animation"
            onClick={handleClick}
            width={700}
            height={640}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div className="arrows">
          <img
            className="clickable"
            src={`${base}leftArrow.png`}
            onClick={() => handleArrow('/heroRoom')}
          />
          <img
            className="clickable rightArrow"
            src={`${base}rightArrow.png`}
            onClick={() => handleArrow('/bookRoom')}
          />
        </div>
      </div>
    </>
  );
}

export default AboutMe;
