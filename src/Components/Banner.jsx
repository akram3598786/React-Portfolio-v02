import React, { useEffect, useState } from "react";
import BannerCon from "../css/Banner.styled";
import Typewriter from "typewriter-effect";
import { BsLinkedin, BsGithub } from "react-icons/bs";
 import Avatar1 from "../assets/image/profilePic.png";
 import Avatar2 from "../assets/image/profilePic-2.jpg";
 


import { SiGmail } from "react-icons/si";

const Banner = () => {
  return (
    <BannerCon>
      <div className="bannerContainer">
        <div className="typeWirter">
          <div className="introMyself">
            <p className="heading">Hi, I am Akram,</p>
            <div className="subHeading">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Web Developer !",
                    "Frontend Developer !",
                    "MERN Stack Developer",
                    "A tech enthusiastic !",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 200,
                }}
              />
            </div>
            <p className="tagLine">
              An enthusiastic Full Stack Web Developer with a strong set of
              technical as well as non-technical skills and a dedication towards
              creating useful and interactive web applications.
            </p>
            <div className="typeButtons">
              <button className="learn-more">
                <a
                  href={
                    "https://drive.google.com/drive/u/1/folders/1DSlHmR99S05j-tCqmgLncARfS3D2T46X"
                  }
                  target={"_blank"}
                >
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Resume</span>
                </a>
              </button>
              {/* <button>Resume</button> */}
            </div>
            <div className="socialIconContainer">
              <a
                href="https://www.linkedin.com/in/akram-ali-b0940216a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FGD193dhSpmjCTEj1jBp9Q%3D%3D"
                target={"_blank"}
              >
                <BsLinkedin className="socialIcons" />
              </a>
              <a href="https://github.com/akram3598786" target={"_blank"}>
                <BsGithub className="socialIcons" />
              </a>
              <a href="mailto:itsakram3598@gmail.com" target={"_blank"}>
                <SiGmail className="socialIcons" />
              </a>
            </div>
          </div>
        </div>

        <div className="imageContainer">
          <img
            src={Avatar2}
            alt=""
            className="avatar"
          />
        </div>
      </div>
    </BannerCon>
  );
};

export default Banner;
