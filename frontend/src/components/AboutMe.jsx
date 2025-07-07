import '../css/aboutMe.css';
import {useEffect, useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';

function AboutMe() {
    const navigate = useNavigate();
    const [fadeOut, setFadeOut] = useState(false);
    const [fadeIn, setFadeIn] = useState(true);
    const [frame, setFrame] = useState(1);
    const [playing, setPlaying] = useState(false);
    const [plaque, setPlaque] = useState(false)
    const [open, setOpen] = useState(false);
    const frameCount = 4;
    const intervalRef = useRef(null);

    const handleArrowRight = () => {
        if (!fadeOut) {
            setFadeOut(true);
            setTimeout(() => {
                navigate('/bookRoom');
            }, 500); 
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => setFadeIn(false), 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (playing) {
            intervalRef.current = setInterval(() => {
                setFrame(prev => {
                    if (open == false){
                        if (prev >= frameCount) {
                            clearInterval(intervalRef.current);
                            setPlaying(false);
                            setOpen(true);
                            return prev;
                        };
                        return prev + 1;
                    
                    }else {
                        if (prev <= 1) {
                            clearInterval(intervalRef.current);
                            setPlaying(false);
                            setOpen(false);
                            return prev;
                        }
                        return prev - 1;
                    };
                });
            }, 100);
        }
        return () => clearInterval(intervalRef.current);
    }, [playing]);

    const handleClick = () => {
        if (!playing) {
            if (open == false){
                setFrame(1);
            }else{
                setFrame(frameCount)
            }
            setPlaying(true);
        }
    }
    const plaqueClick = () => {
        if(!plaque){
            setPlaque(true)
        }else{
            setPlaque(false)
        }
    }
    return(
        <>
            <div className={`fade-overlay ${fadeIn || fadeOut ? 'show' : ''}`}></div>
            <div className="aboutMe-container">
                <div className="title">
                    <img src='titleBanner1.png' height={60}></img>
                </div>
                <div className='information-container'>
                    <img 
                        className = "plaque clickable" 
                        onClick = {plaqueClick}
                        src='AboutMePlaque.png' 
                        width={220} 
                        height={100}>
                    </img>
                    {plaque && (
                        <div className="popup-overlay" onClick={() => setPlaque(false)}>
                            <img
                            src="/plaque1-large.png"
                            alt="Opened Plaque"
                            className="popup-image"
                            />
                        </div>
                        )}
                    <img 
                        className='clickable curtains'
                        src={`curtains/curtain${frame}.png`}
                        alt = "Frame Animation"
                        onClick = {handleClick}
                        style = {{cursor: 'pointer'}}
                        width={700}
                        height={640}>
                    </img>
                </div>
                <div className='arrows'>
                    <img className = {"clickable"} src='leftArrow.png'></img>
                    <img 
                        className = {"clickable rightArrow"} 
                        src='rightArrow.png' 
                        onClick={handleArrowRight}>
                    </img>
                </div>
            </div>
        </>

    );

}

export default AboutMe;