import React, { useState, useEffect } from 'react';
import './home.css';

export default function Home() {
  const [clicked, setClicked] = useState(false);
  const [showScene, setShowScene] = useState(false); // For revealing the scene after animation

  const sphereStyle = {
    transform: clicked ? 'translate(-50%, -50%) scale(0.9)' : 'translate(-50%, -20%) scale(1)',
    top: clicked ? '50%' : '60%',
    left: '50%',
    width: clicked ? '200px' : '350px', // Initially larger, then shrink
    height: clicked ? '200px' : '350px',
    borderRadius: '50%',
    position: 'absolute',
    background: 'radial-gradient(circle at center 70%, rgba(255, 255, 255, 0.3) 1%, #fdfdfd 100%)',
    zIndex: 5,
    transition: 'top 1.5s ease, transform 1.5s ease, width 1.5s ease, height 1.5s ease', // Transition for shrinking and moving
  };

  const handleClick = () => {
    setClicked(true);
  };

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setShowScene(true); // Show the scene after the sphere animation finishes
      }, 1500); // Wait for the sphere animation to complete before showing the scene
    }
  }, [clicked]);

  return (
    <div className="home-main" onClick={handleClick}>
          <div className="grad-out">
            <div className="grad"></div>
            <div className="grad"></div>
          </div>
      {!clicked && (
        <>
          <div className="home-in-1">
            <h1>VALUU HUB</h1>
            <h3>BUILD&nbsp;&nbsp;BRAND&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;THINK&nbsp;&nbsp;VALUU</h3>
            <p>Hi, at ValuuHub, we build, we brand, and we turn clicks into cult followings.</p>
          </div>
          <div className="home-in-2">
            <h1 id="one">DIGITALMARKETINGD</h1>
            <h1>SOCIALMEDIASOCIAL</h1>
            <h1>DIGITALMARKETINGD</h1>
          </div>
        </>
      )}

      <div className="sphere" style={sphereStyle}></div>

      {clicked && (
        <div className={`scene ${showScene ? 'show' : ''}`}>
          <div className="orbit orbit1"></div>
          <div className="orbit orbit2"></div>
          <div className="orbit orbit3"></div>
          <div className="orbit orbit4"></div>
          <div className="orbit orbit5"></div>
          {[...Array(9)].map((_, i) => (
            <div className={`planet planet${i + 1}`} key={i}></div>
          ))}
        </div>
      )}
    </div>
  );
}
