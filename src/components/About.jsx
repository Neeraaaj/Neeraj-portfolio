import React from "react";
import "./About.css";

function About() {
  return (
    <section>
      <h1 style={{ marginTop: "5%" }}>Introduction.</h1>
      <div
        class="grid-flex"
        style={{
          marginTop: "7%",
          borderRadius: "20px 20px 20px 20px",
          marginLeft: "5%"
        }}
      >
        <div
          class="col col-image"
          style={{
            backgroundImage:
              "url(https://camo.githubusercontent.com/bb8a33cab1e25bcec4b0168dc795dce6acf7cd53ec6e8adaf98b35872c2d2b78/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313134373631332f73637265656e73686f74732f31373434323632372f6d656469612f61326432376566353866336663326662633965386263353634383261643231612e706e673f726573697a653d313030307837353026766572746963616c3d63656e746572)",
            borderRadius: "20px 20px 20px 20px",
            boxShadow: "3px 3px 5px black"
          }}
        ></div>
        <div class="col col-text">
          <div class="Aligner-item">
            <p style={{ fontSize: "100%", overflowY: "hidden" }} className="p">
            I'm a passionate web developer and designer with proficiency in HTML, CSS, JavaScript, React, and various backend technologies. Over the course of my career, I've had the privilege of working on diverse projects, ranging from e-commerce websites to interactive web applications, consistently delivering high-quality results. <br />
            
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
