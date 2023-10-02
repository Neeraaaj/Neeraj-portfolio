import React from "react";
import "./skills.css";

function Skills() {
  return (
    <div class="skills-section">
      <div class="skills-header">
        <h4>
          <div className="line"></div>What I am Good at
        </h4>
        <h1>SKILLS</h1>
      </div>
      <div class="skills-container">
        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img
                src="https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png"
                alt=""
                class="skills-icons"
                style={{ width: "150%" }}
              />
            </div>
            <h3>NextJs</h3>
          </div>
        </div>

        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg"
                alt=""
                class="skills-icons"
              />
            </div>
            <h3>CSS3</h3>
          </div>
        </div>

        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img
                src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                alt=""
                class="skills-icons"
              />
            </div>
            <h3>JS</h3>
          </div>
        </div>

        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img
                src="https://play-lh.googleusercontent.com/lNy35u_4HIHu4Wqj0WIENtN0HmeZuEx4V8UwdMw0wxcRKvYbskmPEII05HWxK5nI0g"
                alt=""
                class="skills-icons"
              />
            </div>
            <h3>NODEJS</h3>
          </div>
        </div>

        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img
                src="https://cdn3d.iconscout.com/3d/free/thumb/free-react-5645899-4695757.png?f=webp"
                alt=""
                class="skills-icons"
                style={{ width: "125%" }}
              />
            </div>
            <h3>ReactJS</h3>
          </div>
        </div>

        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img
                src="https://icon-library.com/images/java-icon/java-icon-25.jpg"
                alt=""
                class="skills-icons"
              />
            </div>
            <h3>Java</h3>
          </div>
        </div>

        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img
                src="https://www.svgrepo.com/show/376344/python.svg"
                alt=""
                class="skills-icons"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h3>Python</h3>
          </div>
        </div>

        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img
                src="https://greensock.com/uploads/monthly_2020_03/tweenmax.png.cf27916e926fbb328ff214f66b4c8429.png"
                alt=""
                class="skills-icons"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h3>Gsap</h3>
          </div>
        </div>

        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img
                src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png"
                alt=""
                class="skills-icons"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h3>MongoDB</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
