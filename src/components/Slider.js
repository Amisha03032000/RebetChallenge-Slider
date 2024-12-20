import React, { useState } from "react";
import Draggable from "react-draggable";
import Lottie from "lottie-react";
import Rive from "@rive-app/react-canvas"
import leftArrowAnimation from "../AnimatedAssets/glowing_left_arrows.json"; 
import rightArrowAnimation from "../AnimatedAssets/glowing_right_arrows.json"; 
import glowingCircleAnimation from "../AnimatedAssets/glowing_circle.json";

import greenButton from "../StaticAssets/green_button.png";
import greenCheck from "../StaticAssets/green_check.png";
import greenClose from "../StaticAssets/green_close.png";
import greenLeftArrows from "../StaticAssets/green_left_arrows.png";
import greenRightArrows from "../StaticAssets/green_right_arrows.png";

import orangeButton from "../StaticAssets/orange_button.png";
import orangeLeftArrows from "../StaticAssets/orange_left_arrows.png";
import orangeRightArrows from "../StaticAssets/orange_right_arrows.png";

import redButton from "../StaticAssets/red_button.png";
import redCheck from "../StaticAssets/red_check.png";
import redClose from "../StaticAssets/red_close.png";
import redLeftArrows from "../StaticAssets/red_left_arrows.png";
import redRightArrows from "../StaticAssets/red_right_arrows.png";

import whiteCheck from "../StaticAssets/white_check.png";
import whiteClose from "../StaticAssets/white_close.png";

import "../styles/Slider.css"; 

const Slider = () => {
  const [position, setPosition] = useState(0); 
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = (e, data) => {
    setIsDragging(true);
    setPosition(data.x); 
  };

  const handleStop = () => {
    setIsDragging(false);
    setPosition(0);

    if (position <= -220) {
        console.log("Action Triggered: Orb moved to the left!");
        handleLeftAction();
      } else if (position >= 220) {
        console.log("Action Triggered: Orb moved to the right!");
        handleRightAction();
      }

    setTimeout(() => setPosition(0), 300); 
  };

  const handleLeftAction = () => {
    alert("Orb dragged completely to the right. Decline action triggered!");
    window.open("about:blank", "_blank");
   
  };
  const handleRightAction = () => {
    alert("Orb dragged completely to the right. Decline action triggered!");
    window.open("about:blank", "_blank");
   
  };
  const isLeft = position < -50;
  const isRight = position > 50;

  return (
    <div className="slider-container">
    
    <div className="track"
    
    style={{
        background: isLeft
          ? "linear-gradient(0deg,rgba(255, 90, 139, 1), rgba(98, 22, 49, 1)"
          : isRight
          ? "linear-gradient(0deg, rgba(108, 231, 150, 1),rgba(27, 125, 67, 1))"
          : "linear-gradient(0deg,rgba(37, 37, 47, 1), #222, rgba(20, 20, 27, 1))",
      }}
    >

      {/* #LEFT */}
       <div className="indicator">
            <img src={isLeft ? redClose : isRight ? greenClose :  whiteClose} alt="Close Icon" className="icon" />
            <span className="label" 
            style={{ 
                color: isLeft 
                ? "rgba(98, 22, 49, 1)" 
                : isRight
                ? "rgba(27, 125, 67, 1)"
                : "rgb(255, 255, 255)",
                }}>Decline</span>

            {isLeft ? (
                <img
                src={redLeftArrows} 
                alt="Static Orange Arrow"
                className="arrow-static"
                />
                ) : isRight ? (
                <img
                  src={greenLeftArrows} 
                  alt="Static Green Arrow"
                  className="arrow-static"
                />
                ) : (
                <Lottie
                animationData={leftArrowAnimation} 
                className="arrow-lottie-left"
                />
            )}
            {/* <Lottie animationData={leftArrowAnimation} className="arrow-lottie-left" /> */}
            

       </div>

    
      {/* #ORB */}
      <Draggable
        axis="x"

        bounds={{ left: -250, right: 250 }}
        onDrag={handleDrag}
         onStop={handleStop}
        position={{ x: position, y: 0 }}
      >
       <div className="orb cursor-x"
        style={{
            transition: isDragging ? "none" : "transform 0.3s ease", 
          }}
          >
            {/* <Lottie animationData={rightArrowAnimation} className="glowing-orb" /> */}
            {/* <Rive src={glowingCircleAnimation} className="glowing-orb" /> */}

            <div className="glowCircle"></div>
            <img
              src={isLeft ? redButton : isRight ? greenButton : orangeButton}
              alt="Orb"
              className="orb-static"
            />    
          </div>
      </Draggable>

     
     {/* #RIGHT */}
      <div className="indicator">
        {isRight ? (
            <img
            src={greenRightArrows} 
            alt="Static Orange Arrow"
            className="arrow-static"
            />
            ) : isLeft ? (
            <img
            src={redRightArrows} 
            alt="Static Orange Arrow"
            className="arrow-static"
            />
            ) : (
            <Lottie
            animationData={rightArrowAnimation} 
            className="arrow-lottie-right"
            />
             )}
            {/* <Lottie animationData={rightArrowAnimation} className="arrow-lottie-right" /> */}
            <span className="label" style={{ color: isRight ? "rgba(27, 125, 67, 1)"  : isLeft
                ? "rgba(98, 22, 49, 1": "#FFF" }}>Accept </span>
            <img src={isRight ? greenCheck : isLeft ? redCheck : whiteCheck} alt="Check" className="icon" />
      </div>
      </div>

  </div>




  );
};

export default Slider;
