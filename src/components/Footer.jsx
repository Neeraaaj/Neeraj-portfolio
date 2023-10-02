import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Home from "../Home";

function Footer() {
  const showAlert = () => {
    alert(
      "This service is under construction, try to contact me on other mediums. Thank you <3."
    );
  };
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Crafting Experiences Through Code: Where Design Meets Functionality.
        </p>
      </section>

      <section class="social-media">
        <div class="social-media-wrap">
          <small class="website-rights">Neeraj © 2023</small>
          <div class="social-icons">
            <p
              class="social-icon-link facebook"
              target="_blank"
              aria-label="Facebook"
            >
              <a href="https://api.whatsapp.com/send?phone=+919326576727">
                <i class="fab fa-whatsapp" />
              </a>
            </p>
            <p
              class="social-icon-link instagram"
              target="_blank"
              aria-label="Instagram"
            >
              <a href="https://www.instagram.com/knee__raj/">
                <i class="fab fa-instagram" />
              </a>
            </p>
            <p
              class="social-icon-link youtube"
              target="_blank"
              aria-label="Youtube"
            >
              <a href="mailto:patilneeraj2003@gmail.com">
                <i class="fa fa-envelope" />
              </a>
            </p>
            <p
              class="social-icon-link twitter"
              target="_blank"
              aria-label="Twitter"
            >
            <a href="https://twitter.com/NeerajPatil371" >
              <i class="fab fa-twitter" />
            </a>
            </p>
            <p
              class="social-icon-link twitter"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
