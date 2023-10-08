import React from "react";
import "../App.css";
import "./HeroSection.css";
import Me from './me.png';
import Me2 from './Neeraj.png';

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <div className="main" style={{ width: "100%", height: "100%" }}> */}
{/*       <video
        src="https://cdn.dribbble.com/userupload/7511674/file/original-968366f7df2dced3a044b76d7d63b899.mp4"
        loop
        autoPlay
        muted
      ></video> */}
      {/* <img
            src="https://cdn.dribbble.com/userupload/7512099/file/original-d5e05000d6a2b4646dfee2cc3108d31a.png?resize=1024x768&vertical=center"
          /> */}
      <img className="hero-img"
            src={Me2}
          />
      {/* <img
            src={starbucks}
            width={100}
            style={{
              mixBlendMode: "multiply"
            }}
          /> */}
{/*       <h4>
        Hi 👋, I'm Neeraj Patil, a curious designer and a developer based in
        Mumbai, India.
      </h4> */}
        <h4>Creating Delightful experiences for your business</h4>
      {/* </div> */}
    </div>
  );
}

export default HeroSection;
