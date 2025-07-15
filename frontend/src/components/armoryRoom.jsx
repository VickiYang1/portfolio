import '../css/ArmoryRoom.css';
import '../css/aboutMe.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const base = import.meta.env.BASE_URL;

function ArmoryRoom() {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [activePotion, setActivePotion] = useState(null);
  const [activeWeapon, setActiveWeapon] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const playSound = (filename) => {
    new Audio(`${base}sounds/${filename}`).play();
  };

  const handleArrowUp = () => {
    if (!fadeOut) {
      playSound("walking.mp3");
      setFadeOut(true);
      setTimeout(() => navigate('/heroRoom'), 500);
    }
  };

  const handlePotionClick = (e) => {
    const clickedSrc = e.target.src;
    playSound("bubbling.wav");

    if (clickedSrc.includes("potion-mini-1")) {
      setActivePotion(`${base}potions/potions1.png`);
    } else if (clickedSrc.includes("potion-mini-2")) {
      setActivePotion(`${base}potions/potions2.png`);
    } else if (clickedSrc.includes("potion-mini-3")) {
      setActivePotion(`${base}potions/potions3.png`);
    }
  };

  const handleWeaponClick = (e) => {
    const clickedSrc = e.target.src;

    if (clickedSrc.includes("shield")) {
      setActiveWeapon(`${base}weapons/shield-zoom.png`);
      playSound("shield.mp3");
    } else if (clickedSrc.includes("axe")) {
      setActiveWeapon(`${base}weapons/axe-zoom.png`);
      playSound("axe.mp3");
    } else if (clickedSrc.includes("sword")) {
      setActiveWeapon(`${base}weapons/sword-zoom.png`);
      playSound("sword.wav");
    } else if (clickedSrc.includes("staff")) {
      setActiveWeapon(`${base}weapons/staff-zoom.png`);
      playSound("magic-staff.wav");
    }
  };

  return (
    <>
      <div className={`fade-overlay ${fadeIn || fadeOut ? 'show' : ''}`} />
      <div className="ArmoryRoom-container">
        <div className="title">
          <img src={`${base}titleBanner4.png`} height={70} />
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            className="clickable"
            src={`${base}upArrow.png`}
            width={150}
            height={250}
            style={{ marginTop: "30%", marginLeft: "6%" }}
            onClick={handleArrowUp}
          />

          <div className='object-container'>
            <div className='weapons-container'>
              <div className='weapons1'>
                <img className='clickable' onClick={handleWeaponClick} src={`${base}weapons/shield.png`} width={300} height={300} />
                <img className='clickable' onClick={handleWeaponClick} src={`${base}weapons/axe.png`} width={200} height={400} />
              </div>
              <div className='weapons2'>
                <img className='clickable' onClick={handleWeaponClick} src={`${base}weapons/sword.png`} style={{ marginTop: "60%", marginRight: "5%" }} width={200} height={360} />
                <img className='clickable' onClick={handleWeaponClick} src={`${base}weapons/staff.png`} width={200} height={600} />
              </div>
            </div>

            <div className='potions'>
              <img className='clickable row1' onClick={handlePotionClick} src={`${base}potions/potion-mini-1.png`} width={200} height={100} />
              <img className='clickable row2' onClick={handlePotionClick} src={`${base}potions/potion-mini-3.png`} width={250} height={100} />
              <img className='clickable row3' onClick={handlePotionClick} src={`${base}potions/potion-mini-2.png`} width={450} height={120} />
            </div>
          </div>
        </div>

        {activePotion && (
          <div className='popup-overlay' onClick={() => setActivePotion(null)}>
            <img className="popup-image" src={activePotion} />
          </div>
        )}

        {activeWeapon && (
          <div className='popup-overlay' onClick={() => setActiveWeapon(null)}>
            <img className="popup-image" src={activeWeapon} />
          </div>
        )}
      </div>
    </>
  );
}

export default ArmoryRoom;
