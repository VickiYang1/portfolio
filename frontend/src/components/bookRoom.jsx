import '../css/bookRoom.css';
import '../css/aboutMe.css';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function BookRoom() {
    const navigate = useNavigate();
    const [fadeIn, setFadeIn] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [frame, setFrame] = useState(1);
    const [orbFrame, setOrbFrame] = useState(1);
    const frameCount = 4;
    const orbFrameCount = 8;
    const [orb, setOrb] = useState(false);
    const [activeBook, setActiveBook] = useState(null);
    const orbIntervalRef = useRef(null);

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
        const footstep = new Audio ("sounds/walking.mp3");
        if (!fadeOut) {
            footstep.play();
            setFadeOut(true);
            setTimeout(() => {
                navigate('/aboutMe');
            }, 500);
        }
    }

    const handleClickOrb = () => {
        const magic = new Audio("/sounds/magic-sphere.wav");
        magic.play();

        if (!orb) {
            setOrb(true);

            let currentFrame = 1;
            if (orbIntervalRef.current) {
                clearInterval(orbIntervalRef.current);
                orbIntervalRef.current = null;
            }

            orbIntervalRef.current = setInterval(() => {
                if (currentFrame > orbFrameCount) {
                    clearInterval(orbIntervalRef.current);
                    orbIntervalRef.current = null;
                    return;
                }
                setOrbFrame(currentFrame);
                currentFrame++;
            }, 150);
        }
    };

    const handleBookClick = (e) => {
        const clickedBook = e.target.src;
        const bookFlip = new Audio("/sounds/flipping-book.wav");
        bookFlip.play();

        if (clickedBook.includes("book1")) {
            setActiveBook({
                image: "book1/book1-zoom.png",
                link: "https://github.com/VickiYang1/Hello_World-LFP_Project"
            });
        } else if (clickedBook.includes("book2")) {
            setActiveBook({
                image: "book2/book2-zoom.png",
                link: "https://drive.google.com/file/d/123QzKFhHLU5psotgOMdrIa4r7lOfZgNL/view?pli=1"
            });
        } else if (clickedBook.includes("book3")) {
            setActiveBook({
                image: "book3/book3-zoom.png",
                link: "https://github.com/VickiYang1/YouTube-API-Project"
            });
        }
    };

    return (
        <>
            <div className={`fade-overlay ${fadeIn || fadeOut ? 'show' : ''}`}></div>
            <div className="bookRoom-container">
                <div className="title">
                    <img src='titleBanner2.png' height={60} alt="Title Banner" />
                </div>

                <img className="orb clickable" src='orb.png' alt="Orb" onClick={handleClickOrb} />

                {orb && (
                    <div className="popup-overlay" onClick={() => setOrb(false)}>
                        <div className="popup-image" onClick={(e) => e.stopPropagation()}>
                            <img
                                src={`cloud/cloud${orbFrame}.png`}
                                alt="Magic Orb Popup"
                            />

                            {orbFrame === orbFrameCount && (
                                <div className="orb-buttons">
                                    <img
                                        src="cloud/yes.png"
                                        alt="Yes"
                                        style={{ width: '150px', height: 'auto' }}
                                        onClick={() =>
                                            window.open(
                                                'https://github.com/VickiYang1?tab=repositories',
                                                '_blank'
                                            )
                                        }
                                    />
                                    <img
                                        src="cloud/no.png"
                                        alt="No"
                                        style={{ width: '150px', height: 'auto' }}
                                        className="no-btn"
                                        onClick={() => setOrb(false)}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )}

                <div className='book-container'>
                    <img
                        className='clickable books'
                        src={`book1/book1-${frame}.png`}
                        onClick={handleBookClick}
                        alt="Book 1"
                        width={600}
                        height={540}
                    />
                    <img
                        className='clickable books'
                        src={`book2/book2-${frame}.png`}
                        onClick={handleBookClick}
                        alt="Book 2"
                        width={600}
                        height={540}
                    />
                    <img
                        className='clickable books'
                        src={`book3/book3-${frame}.png`}
                        onClick={handleBookClick}
                        alt="Book 3"
                        width={600}
                        height={540}
                    />
                </div>

                <div className='arrows' style={{ paddingTop: "0%", marginBottom: "2%" }}>
                    <img
                        className="clickable"
                        src='leftArrow.png'
                        alt="Back"
                        onClick={handleArrowLeft}
                    />
                </div>

                {activeBook && (
                    <div className='popup-overlay' onClick={() => setActiveBook(null)}>
                        <div className="popup-image" onClick={e => e.stopPropagation()}>
                            <img src={activeBook.image} alt="Zoomed Book" />
                            <img
                                src="learnMore.png"
                                alt="Learn More"
                                className="learn-more-button clickable"
                                onClick={() => window.open(activeBook.link, '_blank')}
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default BookRoom;
