import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            onClick={closeMobileMenu}
            style={{
              color: click ? "black" : "black"
            }}
          >
            <h4>Neeraj.</h4>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i
              className={click ? "fas fa-times" : "fas fa-bars"}
              style={{
                color: "black"
              }}
            />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li
              className="nav-item"
              style={{
                overflowY: "hidden"
              }}
            >
              <Link
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
                style={{ color: click ? "white" : "black" }}
              >
                Hero
              </Link>
            </li>
            <li
              className="nav-item"
              style={{
                overflowY: "hidden"
              }}
            >
              <Link
                to="/About"
                className="nav-links"
                onClick={closeMobileMenu}
                style={{ color: click ? "white" : "black" }}
              >
                About
              </Link>
            </li>
            <li
              className="nav-item"
              style={{
                overflowY: "hidden"
              }}
            >
              <Link
                to="/skills"
                className="nav-links"
                onClick={closeMobileMenu}
                style={{ color: click ? "white" : "black" }}
              >
                Skills
              </Link>
            </li>
            <li
              className="nav-item"
              // style={{
              //   overflowY: "hidden"
              // }}
            >
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
                style={{ color: click ? "white" : "black" }}
              >
                My Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
