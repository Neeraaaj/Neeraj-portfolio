import React, { useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_t5czg11";
    const publicKey = "T6UXfsoI-tGhh5Hxz";
    const templateId = "template_nybtmag";

    const templateParms = {
      from_name: name,
      from_email: email,
      to_name: "Neeraj",
      message: message
    };

    emailjs
      .send(serviceId, templateId, templateParms, publicKey)
      .then((response) => {
        alert("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <section id="contact">
      <h1>Connect, Communicate, Collaborate!</h1>
      <div class="contact-box">
        <div class="contact-links">
          <div class="links">
            <div class="link">
              <a>
                <img
                  src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
                  alt="linkedin"
                  className="contact-image"
                />
              </a>
            </div>
            <div class="link">
              <a href="https://github.com/Neeraaaj" target="_blank">
                <img
                  src="https://i.postimg.cc/YCV2QBJg/github.png"
                  alt="github"
                  className="contact-image"
                />
              </a>
            </div>
            <div class="link">
              <a>
                <img
                  src="https://i.postimg.cc/W4Znvrry/codepen.png"
                  alt="codepen"
                  className="contact-image"
                />
              </a>
            </div>
            <div class="link">
              <a>
                <img
                  src="https://i.postimg.cc/NjLfyjPB/email.png"
                  alt="email"
                  className="contact-image"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="contact-form-wrapper">
          <form onSubmit={handleSubmit}>
            <div class="form-item">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="sender"
                required
              />
              <label>Name:</label>
            </div>
            <div class="form-item">
              <input
                type="text"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email:</label>
            </div>
            <div class="form-item">
              <textarea
                class=""
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <label>Message:</label>
            </div>
            <button class="submit-btn" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
