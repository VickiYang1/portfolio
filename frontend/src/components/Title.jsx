import { useEffect, useState } from 'react';
import '../css/Title-style.css';

function Title(){
    const [isShrunk, setIsShrunk] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const shrinkThreshold = window.innerHeight * 0.2;
            const expandThreshold = window.innerHeight * 0.1;

            setIsShrunk((prevShrunk) => {
            const scrollY = window.scrollY;
            if (!prevShrunk && scrollY > shrinkThreshold) return true;
            if (prevShrunk && scrollY < expandThreshold) return false;
            return prevShrunk;
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        }, []);

    return(
        <div className="page-container">
            <div className={`name-container ${isShrunk ? "shrink" : ""}`}>
                <div className="name-title">Vicki Yang</div>
            </div>
            <div>
                <img className="portfolio-background"src = "/checker.png" width={1900} height={500}/>
                <div className= "portfolio-container">
                    <div className="portfolio-title"> PORT</div>
                    <div className="portfolio-title"> FOLIO</div>
                </div>
            </div>
        </div>
    )

}

export default Title;