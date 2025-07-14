import '../css/ArmoryRoom.css';
import '../css/aboutMe.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

    const handleArrowUp = () => {
        const footstep = new Audio ("sounds/walking.mp3");
        if (!fadeOut) {
            footstep.play();
            setFadeOut(true);
            setTimeout(() => navigate('/heroRoom'), 500);
        }
    };

    const handlePotionClick = (e) => {
        const clickedSrc = e.target.src;
        const bubble = new Audio('/sounds/bubbling.wav')
        bubble.play();
        if (clickedSrc.includes("potion-mini-1")) setActivePotion("potions/potions1.png");
        else if (clickedSrc.includes("potion-mini-2")) setActivePotion("potions/potions2.png");
        else if (clickedSrc.includes("potion-mini-3")) setActivePotion("potions/potions3.png");
    };

    const handleWeaponClick = (e) => {
        const clickedSrc = e.target.src;
        const swordSound = new Audio ("sounds/sword.wav");
        const staffSound = new Audio ("sounds/magic-staff.wav");
        const axeSound = new Audio ("sounds/axe.mp3");
        const shieldSound = new Audio ("sounds/shield.mp3");

        if (clickedSrc.includes("shield")) {
            setActiveWeapon("weapons/shield-zoom.png");
            shieldSound.play();

        }
        else if (clickedSrc.includes("axe")) {
            setActiveWeapon("weapons/axe-zoom.png");
            axeSound.play();
        }
        else if (clickedSrc.includes("sword")) {
            setActiveWeapon("weapons/sword-zoom.png");
            swordSound.play();
        }
        else if (clickedSrc.includes("staff")) {
            setActiveWeapon("weapons/staff-zoom.png");
            staffSound.play();
        }
    };

    return (
        <>
            <div className={`fade-overlay ${fadeIn || fadeOut ? 'show' : ''}`}></div>
            <div className="ArmoryRoom-container">
                <div className="title">
                    <img src='titleBanner4.png' height={70} />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <img 
                        className="clickable"
                        src='upArrow.png'
                        width={150}
                        height={250}
                        style={{ marginTop: "30%", marginLeft: "6%" }}
                        onClick={handleArrowUp}
                    />
                    <div className='object-container'>
                        <div className='weapons-container'>
                            <div className='weapons1'>
                                <img className='clickable' onClick={handleWeaponClick} src='/weapons/shield.png' width={300} height={300} />
                                <img className='clickable' onClick={handleWeaponClick} src='/weapons/axe.png' width={200} height={400} />
                            </div>
                            <div className='weapons2'>
                                <img className='clickable' onClick={handleWeaponClick} src='/weapons/sword.png' style={{ marginTop: "60%", marginRight: "5%" }} width={200} height={360} />
                                <img className='clickable' onClick={handleWeaponClick} src='/weapons/staff.png' width={200} height={600} />
                            </div>
                        </div>

                        <div className='potions'>
                            <img className='clickable row1' onClick={handlePotionClick} src='/potions/potion-mini-1.png' width={200} height={100} />
                            <img className='clickable row2' onClick={handlePotionClick} src='/potions/potion-mini-3.png' width={250} height={100} />
                            <img className='clickable row3' onClick={handlePotionClick} src='/potions/potion-mini-2.png' width={450} height={120} />
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
