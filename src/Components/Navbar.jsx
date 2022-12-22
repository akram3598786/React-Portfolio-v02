import React, { useState } from "react";
import NavbarDiv from "../css/NavbarDiv.styled";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { FaBars } from "react-icons/fa";
import { animateScroll, Link, scroller } from "react-scroll";
import { animateTopScroll } from "react-scroll";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(false);

  const scrollTo = (toEL) => {
    scroller.scrollTo(toEL, {
      duration: 500,
      smooth: true,
      offset: -60,
    });
  };
  return (
    <NavbarDiv showMenu={showMenu}>
      <div className="navContainer">
        <div className="logo" onClick={() => animateScroll.scrollToTop()}>
        <span style={{transform: "rotate(180deg)"}}>&#125;</span> <span>Akram</span> <span>&#125;</span> 
        </div>
        <div className="options">
          <ul>
            <li
              onClick={() => {
                animateScroll.scrollToTop();
                setShowMenu(false);
              }}
            >
              Home{" "}
            </li>
            <li
              onClick={() => {
                scrollTo("about");
                setShowMenu(false);
              }}
            >
              About
            </li>
            <li
              onClick={() => {
                scrollTo("skills");
                setShowMenu(false);
              }}
            >
              Skills
            </li>
            <li
              onClick={() => {
                scrollTo("projects");
                setShowMenu(false);
              }}
            >
              Projects
            </li>
            <li
              onClick={() => {
                scrollTo("footer");
                setShowMenu(false);
              }}
            >
              Contact
            </li>
          </ul>
        </div>
        <div className="icons">
          {showMenu ? (
            <VscChromeClose
              className="mobile-bars"
              onClick={() => setShowMenu(!showMenu)}
              style={{ color: "#ffffff" }}
            />
          ) : (
            <FaBars
              className="mobile-bars"
              onClick={() => setShowMenu(!showMenu)}
            />
          )}
          {/* 
          <button onClick={() => setTheme(!theme)} className="themeIcon">
            {theme ? <BsMoonStarsFill /> : <BsFillSunFill />}
          </button> */}
        </div>
      </div>
    </NavbarDiv>
  );
};

export default Navbar;
