import { useState, useEffect, useRef } from 'react';

function Cat() {
  const [frame, setFrame] = useState(1);
  const walkFrameCount = 4;
  const followerRef = useRef(null);
  const mouseX = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(650);
  const [isWalking, setIsWalking] = useState(false);
  const [facingRight, setFacingRight] = useState(true);
  const lastX = useRef(0);
  const inactivityTimer = useRef(null);
  const inactivityStarted = useRef(false);


  useEffect(() => {
    const handleMouseMove = (e) => {
        mouseX.current = e.clientX;
        setIsWalking(true);

        if (e.clientX > lastX.current) {
            setFacingRight(true);
        } else if (e.clientX < lastX.current) {
            setFacingRight(false);
        }
        lastX.current = e.clientX;

      // Clear any pending sit timer since we're moving
        clearTimeout(inactivityTimer.current);
        inactivityStarted.current = false;

    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let interval;

    if (isWalking) {
      interval = setInterval(() => {
        setFrame((prev) => (prev % walkFrameCount) + 1); 
      }, 100);
    } else {
      setFrame(5); // Sit frame 1
      let sitStep = 0;

      interval = setInterval(() => {
        sitStep++;
        if (sitStep === 1) {
          setFrame(6); // Sit frame 2
        } else {
          clearInterval(interval); 
        }
      }, 300);
    }

    return () => clearInterval(interval);
  }, [isWalking]);

  useEffect(() => {
    const offsetX = facingRight ? -250 : 50;
    const animate = () => {
        const maxStep = 4; 
        const dx = mouseX.current - currentX.current;

        if (Math.abs(dx) > maxStep) {
        currentX.current += maxStep * Math.sign(dx); 
        } else {
        currentX.current = mouseX.current; 
        }

      if (followerRef.current) {
        const screenWidth = window.innerWidth;
        let targetX = currentX.current + offsetX;
        targetX = Math.max(0, Math.min(targetX, screenWidth - 200));
        followerRef.current.style.left = `${targetX}px`;
        followerRef.current.style.top = `${currentY.current}px`;
        followerRef.current.style.transform = `scaleX(${facingRight ? -1 : 1})`;
      }

      const distance = Math.abs(mouseX.current - currentX.current);

        if (distance < 1 && isWalking && !inactivityStarted.current) {
        inactivityStarted.current = true;

        inactivityTimer.current = setTimeout(() => {
            setIsWalking(false);
            inactivityStarted.current = false; 
        }, 400);
    }


      requestAnimationFrame(animate);
    };

    animate();
  }, [isWalking, facingRight]);

  return (
    <div>
      <img
        ref={followerRef}
        src={`cat/cat${frame}.png`}
        alt="Animated cat"
        style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          pointerEvents: 'none',
          zIndex: 1000,
        }}
      />
    </div>
  );
}

export default Cat;
