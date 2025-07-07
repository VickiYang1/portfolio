import '../css/bookRoom.css';
import '../css/aboutMe.css';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function BookRoom() {
    const navigate = useNavigate();
    const [fadeIn, setFadeIn] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [frame, setFrame] = useState(1);
    const frameCount = 4;

    useEffect(() => {
        const timer = setTimeout(() => setFadeIn(false), 500);
        return () => clearTimeout(timer);
    }, []);

     useEffect(() => {
        const interval = setInterval(() => {
        setFrame(prev => (prev % frameCount) + 1);
        }, 300); 

        return () => clearInterval(interval);
    }, []);

    const handleArrowLeft = () => {
        if (!fadeOut) {
            setFadeOut(true);
            setTimeout(() => {
                navigate('/');
            }, 500); 
        }
    }

    return (
        <>
            <div className={`fade-overlay ${fadeIn || fadeOut ? 'show' : ''}`}></div>
            <div className="bookRoom-container">
                <div className="title">
                    <img src='titleBanner2.png' height={60}></img>
                </div>
                <img className="orb clickable" src='orb.png'></img>
                <div className='book-container'>
                    <img 
                        className='clickable books'
                        src={`book1/book1-${frame}.png`}
                        alt = "Frame Animation"
                        width={600}
                        height={540}>
                    </img>

                    <img 
                        className='clickable books'
                        src={`book2/book2-${frame}.png`}
                        alt = "Frame Animation"
                        width={600}
                        height={540}>
                    </img>

                    <img 
                        className='clickable books'
                        src={`book3/book3-${frame}.png`}
                        alt = "Frame Animation"
                        width={600}
                        height={540}>
                    </img>

                </div>
                <div className='arrows' style={{paddingTop: "0%", marginBottom:"2%"}}>
                    <img 
                        className = {"clickable"} 
                        src='leftArrow.png'
                        onClick= {handleArrowLeft}>
                    </img>
                </div>
            </div>
        </>
    );
}

export default BookRoom;
