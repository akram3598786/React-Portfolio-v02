import styled from "styled-components";
import React from "react";
import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import { Fade } from "react-awesome-reveal";

const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;

  color: #ffffff;
  .imgCon {
    overflow: hidden;
    /* padding: 10px; */
    /* border: 1px solid black; */

    img {
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
    }

    &:hover {
      /* transition: scale(1.4); */

      img {
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        transition: transform 2000ms ease;
        transform: scale(1.05);
      }
    }
  }

  .descCon {
    /* border: 1px solid white; */

    display: flex;
    flex-direction: column;
    gap: 15px;

    text-align: left;
    padding: 10px 20px;
    box-sizing: border-box;
    align-items: flex-start;

    .title {
      font-size: 26px;
      font-weight: 500;
      margin-bottom: -10px;
      color: #3b82f6;
    }
    color: #f1f5f9;
    font-size: 14px;
    .rank{
      background : darkslategray;
      padding : 3px 5px;
      border-radios : 6px;
      margin-bottom : -8px;
    }
    .rankDiv{
      margin-bottom : -10px;
    }
  }

  .buttonsCon {
    position: absolute;
    bottom: 0;
    margin-top: 20px;
    margin-bottom: 15px;
    // background : yellow;

    /* border: 1px solid white; */
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: auto;
    gap: 15px;

    /* From uiverse.io */
    button {
      --color: #3b82f6;
      font-family: inherit;
      display: inline-block;
      width: auto;
      padding: 0 8px;
      height: 2em;

      position: relative;
      overflow: hidden;
      /* border: 2px solid var(--color); */
      transition: color 0.5s;
      z-index: 1;
      font-size: 17px;
      border-radius: 6px;
      font-weight: 500;
      color: var(--color);
      border: 0;

      .iconLink {
        text-decoration: none;
        color: #0d1117;
        display: flex;
        gap: 15px;
        align-items: center;

        span {
          font-size: 20px;

          display: flex;
        }
        /* border: 1px solid black; */
      }
    }

    button:before {
      content: "";
      position: absolute;
      z-index: -1;
      background: var(--color);
      height: 150px;
      width: 350px;
      border-radius: 50%;
    }

    button:hover * {
      color: #fff;
    }

    button:before {
      top: 100%;
      left: 100%;
      transition: all 0.7s;
    }

    button:hover:before {
      top: -30px;
      left: -30px;
    }

    button:active:before {
      background: #3b82f6;
      transition: background 0s;
    }
  }

  @media (max-width: 470px) {
    .buttonsCon {
      flex-wrap: wrap;
    }
  }
`;

const Signleproject = ({
  heroImage,
  title,
  desc,
  team,
  git,
  deployed,
  techStack,
  blog,
   rank
}) => {
  return (
    <Wrapper>
      <div className="imgCon">
        <Fade direction="up" duration={700}>
          <img src={heroImage} width={"100%"} alt="" />
        </Fade>
      </div>
      <div className="descCon">
        <Fade direction="up" duration={800}>

          <p className="title">{title}</p>
          <div className="rankDiv">{rank ? <p className="rank">Got 2nd Rank in construct week at MASAI School</p> : ""}</div>
          {/* <p  className="rank">{rank ? "Got 2nd Rank in construct week at MASAI School" : ""}</p> */}

          <p>{desc}</p>
          <p>{techStack}</p>
          <p>{team}</p>
          {/* <p>{rank ? "Got 2nd Rank in construct week at MASAI School" : ""}</p  > */}
        </Fade>
      </div>
      <div className="buttonsCon">
        <Fade direction="up" duration={800}>
          <button>
            <a href={git} className="iconLink" target={"_blank"}>
              <p>Source Code</p>
              <span>
                <SiGithub />
              </span>
            </a>
          </button>
          <button>
            <a href={deployed} className="iconLink" target={"_blank"}>
              <p>Live</p>
              <span>
                {" "}
                <BiLinkExternal />
              </span>
            </a>
          </button>
          {/* <button>
            <a href={blog} className="iconLink" target={"_blank"}>
              <p>Blog</p>
              <span>
                {" "}
                <BiLinkExternal />
              </span>
            </a>
          </button> */}
        </Fade>
      </div>
    </Wrapper>
  );
};

export default Signleproject;
