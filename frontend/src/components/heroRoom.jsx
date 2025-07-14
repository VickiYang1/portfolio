import '../css/HeroRoom.css';
import '../css/aboutMe.css';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

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

    const handleBannerClick = (e) => {
        const clickedSrc = e.target.src;
        const select = new Audio ("sounds/select.mp3")
        select.play();

        if (clickedSrc.includes("doit.png")) {
            if (!banner1){
                setBanner1(true);
            }
        }else if (clickedSrc.includes("steam.png")) {
            if (!banner2){
                setBanner2(true);
            }
        }else if (clickedSrc.includes("mustard.png")) {
            if (!banner3){
                setBanner3(true);
            }
        };
    }

    const handleArrowUp = () => {
        const footstep = new Audio ("sounds/walking.mp3");
        if (!fadeOut) {
            footstep.play();
            setFadeOut(true);
            setTimeout(() => {
                navigate('/armoryRoom');
            }, 500); 
        }
    } 
 
    const handleArrowRight = () => {
        const footstep = new Audio ("sounds/walking.mp3");
        if (!fadeOut) {
            footstep.play();
            setFadeOut(true);
            setTimeout(() => {
                navigate('/');
            }, 500); 
        }
    };

    return (
        <>
            <div className={`fade-overlay ${fadeIn || fadeOut ? 'show' : ''}`}></div>
            <div className="heroRoom-container">
                <div className="title">
                    <img src='titleBanner3.png' height={70}></img>
                </div>
                <div className='banner-container'> 
                    <div className='banner-plaque'>
                        <img src="doit-banner.png" width={300} height={490}/>
                        <img 
                            className="clickable" 
                            src="doit.png" 
                            onClick={handleBannerClick}
                            width={220} 
                            height={80} 
                            style={{marginLeft:"3%"}}/>
                    </div>
                    {banner1 &&(
                        <div className='popup-overlay' onClick={() => setBanner1(false)}> 
                            <img 
                                className="popup-image"
                                src='plaque2-large.png'/>
                        </div>
                    )}
                    <div className='banner-plaque'>
                        <img src="steam-banner.png" width={300} height={490}/>
                        <img 
                            className="clickable" 
                            src="steam.png" 
                            onClick={handleBannerClick}
                            width={220} 
                            height={80}/>
                    </div>
                    {banner2 &&(
                        <div className='popup-overlay' onClick={() => setBanner2(false)}> 
                            <img 
                                className="popup-image"
                                src='plaque3-large.png'/>
                        </div>
                    )}
                    <div className='banner-plaque'>
                        <img src="mustard-banner.png" width={300} height={490}/>
                        <img 
                            className="clickable" 
                            src="mustard.png" 
                            onClick={handleBannerClick}
                            width={220} 
                            height={80} 
                            style={{marginRight:"9%"}}/>
                    </div>
                    {banner3 &&(
                        <div className='popup-overlay' onClick={() => setBanner3(false)}> 
                            <img 
                                className="popup-image"
                                src='plaque2-large.png'/>
                        </div>
                    )}
                </div>

                <div style={{marginLeft:"6.5%", marginTop:"2%"}}>
                    <img 
                        className = {"clickable"} 
                        src='upArrow.png'
                        onClick={handleArrowUp}>
                    </img>
                    <img 
                        className = {"clickable rightArrow"} 
                        src='rightArrow.png' 
                        style={{marginLeft:"77%"}}
                        onClick={handleArrowRight}>
                    </img>
                </div>
            </div>
        </>
    );
}

export default HeroRoom;
