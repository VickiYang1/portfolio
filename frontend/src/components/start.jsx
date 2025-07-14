import '../css/aboutMe.css';
import '../css/start.css';
import {useEffect, useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';

function Start(){
    const frameCount = 6;
    const [frame, setFrame] = useState(1);
    const [fadeIn, setFadeIn] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const intervalRef = useRef(null);
    const navigate = useNavigate();
    const [click, setClick] = useState(false);
    const fullAnimation = 32;
    const loopIntervalRef = useRef(null);
    

    useEffect(() => {
        const timer = setTimeout(() => setFadeIn(false), 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        loopIntervalRef.current = setInterval(() => {
            setFrame(prev => (prev % frameCount) + 1);
        }, 300);

        return () => clearInterval(loopIntervalRef.current);
    }, []);

    const handleClick = () => {
        const clicked = new Audio ("sounds/select.mp3")
        const starting = new Audio ("sounds/startSounds.mp3")
        if (!click) {
            clicked.play();
            starting.play();
            setFrame(1);
            clearInterval(loopIntervalRef.current);

            setClick(true);
            intervalRef.current = setInterval(() => {
                setFrame(prev => {
                    if (prev >= fullAnimation) {
                        clearInterval(intervalRef.current);
                        setFadeOut(true);
                        setTimeout(() => {
                            navigate('/aboutMe');
                        }, 500);
                        return prev;
                    }
                    return prev + 1;
                });
            }, 200); 
        }
    };


    return(
        <>
        <div className={`fade-overlay ${fadeIn || fadeOut ? 'show' : ''}`}></div>
        <div className='start-container'>
            {!click &&(
                <div className='white-overlay'>
                    <img
                        className='profile-btn clickable'
                        src="viewProfile.png"
                        alt="View Profile"
                        onClick={handleClick}
                    />
                </div>

            )}
            <img 
                className='start-image'
                src={`start/start${frame}.png`}    
            />
        </div>
        </>
    );


}export default Start;