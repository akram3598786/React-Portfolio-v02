import React from "react";
import { SkillsDiv } from "../css/Skills.styled";
import { FaReact } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import {
  SiJavascript,
  SiReact,
  SiReactrouter,
  SiMongodb,
  SiExpress,
  SiStyledcomponents,
  SiMaterialui,
  SiTypescript,
  SiPostman,
  SiRedux,
  SiGithub,
  SiGit,
  SiCypress,
  SiNodedotjs,
  SiCss3,
  SiHtml5,
  SiNetlify,
  SiHeroku,
  SiJson,
  SiSocketdotio,
  SiJsonwebtokens,
  SiNpm,
  SiVercel,
  SiRedis,
  SiChakraui,
  SiSap,
  SiMicrosoftpowerpoint,
  SiMicrosoftword,
  SiMicrosoftexcel,
  SiBootstrap,
} from "react-icons/si";
import JWT from "../assets/skillsIcon/css3.svg";

import { VscJson } from "react-icons/vsc";

const Skills = () => {
  return (
    <SkillsDiv id="skills">
      <p className="title">Skills</p>

      <div className="mainContainer">
        <div className="container">
          <div className="FrontEnd">
            <p className="subTitle">Frontend</p>
            <div className="frontEndSKills">
              <ul className="skillsList">
                <Fade direction="up" duration={700}>
                  <li>
                    <span>
                      <SiReact fill="#53c1de" />
                    </span>
                    <p>React.Js</p>
                  </li>

                  <li>
                    <span>
                      <SiJavascript fill="#f7df1e" />
                    </span>
                    <p>JavaScript</p>
                  </li>

                  <li>
                    <span>
                      <SiCss3 fill="#1572b6" />
                    </span>
                    <p>CSS3</p>
                  </li>
                  <li>
                    <span>
                      <SiHtml5 fill="#ff5722" />
                    </span>
                    <p>HTML5</p>
                  </li>
                  <li>
                    <span>
                      <SiRedux fill="#764abc" />
                    </span>
                    <p>Redux</p>
                  </li>

                  <li>
                    <span>
                      <SiStyledcomponents />
                    </span>
                    <p>Styled-Components</p>
                  </li>
                  <li>
                    <span>
                      <SiReactrouter />
                    </span>
                    <p>React-router-dom</p>
                  </li>
                  <li>
                    <span>
                      <SiMaterialui fill="#007fff" />
                    </span>
                    <p>Material UI</p>
                  </li>
                  <li>
                    <span>
                      <SiChakraui fill="#007fff" />
                    </span>
                    <p>Chakra UI</p>
                  </li>
                  <li>
                    <span>
                      <SiBootstrap fill="rgb(138, 49, 190)" />
                    </span>
                    <p>Bootstrap</p>
                  </li>
                </Fade>
              </ul>
            </div>
          </div>
          <div className="FrontEnd">
            <p className="subTitle">Backend</p>
            <div className="frontEndSKills">
              <ul className="skillsList">
                <Fade direction="up" duration={700}>
                  <li>
                    <span>
                      <SiMongodb fill="#4faa41" />
                    </span>
                    <p>MongoDB</p>
                  </li>
                  <li>
                    <span>
                      <SiExpress />
                    </span>
                    <p>Express.Js</p>
                  </li>
                  <li>
                    <span>
                      <SiNodedotjs fill="#86ce2e" />
                    </span>
                    <p>Node.Js</p>
                  </li>
                  <li>
                    <span>
                      <SiJson fill="grey"/>
                    </span>
                    <p>JSON Server</p>
                  </li>
                  <li>
                    <span>
                      <SiJsonwebtokens />
                    </span>
                    <p>JWT Auth</p>
                  </li>
                  <li>
                    <span>
                      <img
                        src="https://mongoosejs.com/docs/images/favicon/favicon-32x32.png"
                        alt=""
                      />
                      {/* <SiNodedotjs fill="#86ce2e" /> */}
                    </span>
                    <p>Mongoose</p>
                  </li>
                </Fade>
              </ul>
            </div>
          </div>
        </div>
        <div className="tools">
          <p className="subTitle">Tools</p>
          <div className="toolsInSkills">
            <ul className="skillsList">
              <Fade direction="up" duration={700}>
                <li>
                  <span>
                    <SiGit fill="#f34f29" />
                  </span>
                  <p>Git</p>
                </li>
                <li>
                  <span>
                    <SiGithub />
                  </span>
                  <p>Github</p>
                </li>
                <li>
                  <span>
                    <SiPostman fill="#f36933" />
                  </span>
                  <p>Postman</p>
                </li>
                <li>
                  <span>
                    <SiNetlify fill="#37a1a1" />
                  </span>
                  <p>Netlify</p>
                </li>
                <li>
                  <span>
                    <SiHeroku style={{ background: "#440099" }} />
                  </span>
                  <p>Heroku</p>
                </li>
                <li>
                  <span>
                    <VscJson />
                  </span>
                  <p>Jeson-Server</p>
                </li>
                <li>
                  <span>
                    <SiNpm fill="#e55c5c" />
                  </span>
                  <p>NPM</p>
                </li>
                <li>
                  <span>
                    <SiSap fill="rgb(128, 172, 255)" color="white"/>
                  </span>
                  <p>SAP</p>
                </li>
                <li>
                  <span>
                    <SiMicrosoftexcel fill="green"/>
                  </span>
                  <p>MS-Excel</p>
                </li>
                <li>
                  <span>
                    <SiMicrosoftword fill=" skyblue"/>
                  </span>
                  <p>MS-Word</p>
                </li>
                <li>
                  <span>
                    <SiMicrosoftpowerpoint fill="red"/>
                  </span>
                  <p>Power Point</p>
                </li>
              </Fade>
            </ul>
          </div>
        </div>
      </div>
    </SkillsDiv>
  );
};

export default Skills;
