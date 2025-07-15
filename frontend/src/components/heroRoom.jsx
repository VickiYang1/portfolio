import '../css/HeroRoom.css';
import '../css/aboutMe.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const base = import.meta.env.BASE_URL;

function HeroRoom() {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [banner1, setBanner1] = useState(false);
  const [banner2, setBanner2] = useState(false);
  const [banner3, setBanner3] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const playSound = (file) => {
    new Audio(`${base}sounds/${file}`).play();
  };

  const handleBannerClick = (e) => {
    const clickedSrc = e.target.src;
    playSound('select.mp3');

    if (clickedSrc.includes(`${base}doit.png`)) {
      setBanner1(true);
    } else if (clickedSrc.includes(`${base}steam.png`)) {
      setBanner2(true);
    } else if (clickedSrc.includes(`${base}mustard.png`)) {
      setBanner3(true);
    }
  };

  const handleArrowUp = () => {
    if (!fadeOut) {
      playSound('walking.mp3');
      setFadeOut(true);
      setTimeout(() => navigate('/armoryRoom'), 500);
    }
  };

  const handleArrowRight = () => {
    if (!fadeOut) {
      playSound('walking.mp3');
      setFadeOut(true);
      setTimeout(() => navigate('/aboutMe'), 500);
    }
  };

  return (
    <>
      <div className={`fade-overlay ${fadeIn || fadeOut ? 'show' : ''}`} />
      <div className="heroRoom-container">
        <div className="title">
          <img src={`${base}titleBanner3.png`} height={70} />
        </div>

        <div className="banner-container">
          {/* Banner 1 */}
          <div className="banner-plaque">
            <img src={`${base}doit-banner.png`} width={300} height={490} />
            <img
              className="clickable"
              src={`${base}doit.png`}
              onClick={handleBannerClick}
              width={220}
              height={80}
              style={{ marginLeft: '3%' }}
            />
          </div>
          {banner1 && (
            <div className="popup-overlay" onClick={() => setBanner1(false)}>
              <img className="popup-image" src={`${base}plaque2-large.png`} />
            </div>
          )}

          {/* Banner 2 */}
          <div className="banner-plaque">
            <img src={`${base}steam-banner.png`} width={300} height={490} />
            <img
              className="clickable"
              src={`${base}steam.png`}
              onClick={handleBannerClick}
              width={220}
              height={80}
            />
          </div>
          {banner2 && (
            <div className="popup-overlay" onClick={() => setBanner2(false)}>
              <img className="popup-image" src={`${base}plaque3-large.png`} />
            </div>
          )}

          {/* Banner 3 */}
          <div className="banner-plaque">
            <img src={`${base}mustard-banner.png`} width={300} height={490} />
            <img
              className="clickable"
              src={`${base}mustard.png`}
              onClick={handleBannerClick}
              width={220}
              height={80}
              style={{ marginRight: '9%' }}
            />
          </div>
          {banner3 && (
            <div className="popup-overlay" onClick={() => setBanner3(false)}>
              <img className="popup-image" src={`${base}plaque4-large.png`} />
            </div>
          )}
        </div>

        <div style={{ marginLeft: '6.5%', marginTop: '2%' }}>
          <img
            className="clickable"
            src={`${base}upArrow.png`}
            onClick={handleArrowUp}
          />
          <img
            className="clickable rightArrow"
            src={`${base}rightArrow.png`}
            onClick={handleArrowRight}
            style={{ marginLeft: '77%' }}
          />
        </div>
      </div>
    </>
  );
}

export default HeroRoom;
