import React, { useState, useEffect } from "react";
import "./project.css";

function Projects() {
  if (window.innerWidth > 768) {
    document.addEventListener("mousemove", function (details) {
      document.querySelectorAll(".img").forEach((elem) => {
        const position = elem.getAttribute("value");
        var X = (window.innerWidth - details.clientX * position) / 90;
        var Y = (window.innerWidth - details.clientY * position) / 90;

        elem.style.transform = `translateX(${X}px) translateY(${Y}px)`;
      });
    });
  }
  return (
    <div id="work">
      <h4>
        <div className="line"></div>What I do
      </h4>
      <h1>Work Samples</h1>
      <div id="samples">
        <div id="left">
          <div className="smpl">
            <img src="https://cdn.dribbble.com/userupload/10422383/file/original-b41bd60af19c6b30706adb1241f91f5c.png?resize=1600x960" />
            <a target="_blank" href="https://www.washoo.in">
              <button className="btn">Preview</button>
            </a>
          </div>
          <div className="smpl">
            <img src="https://cdn.dribbble.com/userupload/10422715/file/original-f2b88f01153b46961818bf5421d494c1.png?resize=1024x577&vertical=center" />
            <a target="_blank" href="https://dsb-media-website2.vercel.app/">
              <button className="btn" style={{ width: "fit-content" }}>Preview</button>
            </a>
          </div>
          <div className="smpl">
            <img src="https://cdn.dribbble.com/userupload/10314602/file/original-c3df7316ad3caece7cfab6fe434fd3f2.png?resize=1200x900" />
            <a
              target="_blank"
              href="https://github.com/Neeraaaj/Zomato-Review-Analysis/tree/main"
            >
              <button className="btn">Preview</button>
            </a>
          </div>
          <div className="smpl">
            <img src="https://cdn.dribbble.com/userupload/10318907/file/original-2230c082c2e5a31bfcf8bba19f77299d.png?resize=1200x696" />
            <a
              target="_blank"
              href="https://github.com/Neeraaaj/MoonLandingDataAnalysisUsingPowerBI"
            >
              <button className="btn">Preview</button>
            </a>
          </div>
          <div className="smpl">
            <img src="https://cdn.dribbble.com/userupload/10322468/file/original-cb3ad247c027433215f5c65af75f0c7e.png?resize=1200x600" />
            <a target="_blank" href="https://ai-news2.vercel.app/">
              <button className="btn">Preview</button>
            </a>
          </div>
        </div>
        <div id="right">
          <a href="https://github.com/Neeraaaj">
            <img
              src="https://asynchronousjavascriptor.github.io/pflo/images/seemywork.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
