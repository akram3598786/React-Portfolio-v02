import React from "react";
import styled from "styled-components";

const NavbarDiv = styled.nav`
  height: 60px;
  width: 100%;
  z-index: 5;
  position: fixed;
  top: 0;
  /* background-color: #111827; */
  /* Dark MOde */
  background-color: #000000;
  color: #ffffff;
  .navContainer {
    height: 100%;
    margin: auto;
    width: 80%;
    /* border: 1px solid white; */
    display: flex;
    align-items: center;

    /* justify-content: center; */
    /* background-color: #1f2633; */
    .logo {
      display: flex;
      align-items: center;
      // justify-content: center; 

      padding: 0 15px;
      width: 30%;
      height: 100%;
      gap: 6px;
      font-size: 24px;
      font-weight: 500;
      cursor: pointer;
      /* border: 1px solid white; */

      & > span:last-child {
        color: #e11d48;
      }
    }
    .options {
      user-select: none;
      width: 30%;
      height: 100%;
      flex-grow: 1;
      display: flex;
      box-sizing: border-box;
      padding: 5px;
      font-size: 18px;
      /* border: 1px solid white; */
      font-weight: 500;
      ul {
        width: 100%;
        margin: 0;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        list-style: none;

        li {
          text-decoration: none;
          color: #a0a0a0;
          cursor: pointer;
          position: relative;
          padding: 0 2px;

          &::after {
            content: "";
            position: absolute;
            background-color: #e11d48;
            height: 3px;
            width: 0%;
            left: 0;
            bottom: -10px;
            transition: 0.3s;
          }
          &:hover::after {
            width: 100%;
          }
          &:hover {
            color: #ffffff;
          }
        }
      }
    }

    .icons {
      height: 100%;
      width: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      fill: #ffffff;
      /* border: 1px solid red; */

      //ThemeIcon
      .themeIcon {
        background-color: #111827;
        border: 0;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
      }
    }
    .mobile-bars {
      visibility: hidden;
      opacity: 0;
      font-size: 20px;
    }
  }

  @media (max-width: 1080px) {
    .logo {
      width: 35%;
    }
  }
  @media (max-width: 998px) {
    .navContainer {
      padding: 0 20px;

      .logo {
    
        justify-content: flex-start;
      }

      .options {
        width: 80%;
        ul {
          width: 100%;
          justify-content: space-evenly;
        }
      }
    }
  }

  @media (max-width: 850px) {
    .navContainer {
      box-sizing: border-box;
      width: 100%;
      padding: 0;
      justify-content: space-between;
      position: relative;

      .logo {
        justify-content: center;
      }
      .options {
        ul {
          justify-content: space-around;
        }
      }

      .icons {
      }
    }
  }

  @media (max-width: 675px) {
    .navContainer {
      box-sizing: border-box;
      /* padding: 10px; */
      width: 90%;

      justify-content: space-between;
      position: relative;

      .mobile-bars {
        visibility: visible;
        opacity: 1;
      }

      .logo {
        width: auto;
      }
      .options {
        visibility: ${(props) => (props.showMenu ? "visible" : "hidden")};
        opacity: ${(props) => (props.showMenu ? 1 : 0)};
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        height: 400px;
        color: black;
        transition: 500ms;

        ul {
          background-color: #111827;
          border-radius: 8px;

          flex-direction: column;
          padding: 20px;
          gap: 5px;
          li {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
          }
        }
      }

      .icons {
        width: 15%;
        //ThemeIcon
        .themeIcon {
          display: none;
          visibility: hidden;
          opacity: 0;
        }
      }
    }
  }
`;

export default NavbarDiv;
