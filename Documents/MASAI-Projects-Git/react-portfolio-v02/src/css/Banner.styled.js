import styled from "styled-components";

const BannerCon = styled.div`
  margin-top: 60px;
  height: 500px;
  /* height: 100vh; */
  /* margin-bottom: 30px; */

  /* border: 1px solid black; */
  width: 100%;
  background-color: #0d1117;

  color: #ffffff;

  //Container
  .bannerContainer {
    display: flex;
    /* border: 1px solid white; */
    height: 100%;
    width: 80%;
    justify-content: space-evenly;

    margin: auto;

    //Childs
    & > div {
      width: 50%;
      /* border: 1px solid white; */
    }

    //First Child
    .typeWirter {
      width: 75%;
      display: flex;
      box-sizing: border-box;
      padding: 15px;
      flex-direction: column;
      justify-content: center;
      flex-wrap: wrap;
      /* align-items: center; */

      //Details about myself
      .introMyself {
        /* margin-left: 120px; */
        text-align: left;
        /* border: 1px solid white; */

        box-sizing: border-box;
        padding-left: 20px;

        .heading {
          margin: 0;
          font-size: 35px;
          font-weight: 500;
        }

         .tagLine {
         // border: 1px solid white;
         font-size : large;
        } 

        .subHeading {
          margin: 0;
          font-size: 40px;
          color: #e11d48;
          font-weight: 600;
        }
      }

      //Buttons
      .typeButtons {
        margin-left: -10px;
        /* border: 1px solid white; */
        margin-top: 30px;
        display: flex;
        height: auto;
        width: auto;
        box-sizing: border-box;
        padding: 5px;
        justify-content: space-between;
        gap: 15px;

        //Resume Button
        button {
          position: relative;
          display: inline-block;
          cursor: pointer;
          outline: none;
          border: 0;
          vertical-align: middle;
          text-decoration: none;
          background: transparent;
          padding: 0;
          font-size: 16px;
          font-family: inherit;
        }

        button.learn-more {
          width: 12rem;
          height: auto;
        }

        button.learn-more .circle {
          transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
          position: relative;
          display: block;
          margin: 0;
          width: 3rem;
          height: 3rem;
          background: #282936;
          border-radius: 1.625rem;
        }

        button.learn-more .circle .icon {
          transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          background: #fff;
        }

        button.learn-more .circle .icon.arrow {
          transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
          left: 0.625rem;
          width: 1.125rem;
          height: 0.125rem;
          background: none;
        }

        button.learn-more .circle .icon.arrow::before {
          position: absolute;
          content: "";
          top: -0.29rem;
          right: 0.0625rem;
          width: 0.625rem;
          height: 0.625rem;
          border-top: 0.125rem solid #fff;
          border-right: 0.125rem solid #fff;
          transform: rotate(45deg);
        }

        button.learn-more .button-text {
          transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 0.75rem 0;
          margin: 0 0 0 1.85rem;
          color: #e11d48;
          font-weight: 700;
          line-height: 1.6;
          text-align: center;
          text-transform: uppercase;
        }

        button:hover .circle {
          width: 100%;
        }

        button:hover .circle .icon.arrow {
          background: #fff;
          transform: translate(1rem, 0);
        }

        button:hover .button-text {
          color: #ffffff;
        }
      }

      .socialIconContainer {
        //border: 1px solid white;
        height: auto;
        width: auto;

        height: 80px;
        display: flex;
        align-items: center;
        margin-top: 30px;
        display: flex;

        gap: 35px;
        .socialIcons {
          font-size: 38px;
          color: #ffffff;
          cursor: pointer;

          /* &:hover {
           
            transition: 0.3s;
            font-size: 40px;
          } */
          transition: transform 0.5s ease;
          &:hover {
            transform: scale(1.2);
            color: #3b82f6;
          }
        }
      }
    }

    //SecondChild

    .imageContainer {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .avatar {
        height: 70%;
        border-radius: 10%;
        width : 55%;
        border : 5px solid #e11d48;
         box-shadow: rgb(38, 57, 77) 0px 30px 30px -10px; 
      }
    }
  }

  @media (max-width: 1148px) {
    width: 100%;
    /* height: 1000px; */
    /* padding: 0 30px; */

    .bannerContainer {
      width: 100%;

      //Childs
      /* & > div {
        width: 100%;
        border: 1px solid white;
      } */

      /* .typeWirter {
        width: 100%;
      } */

      .imageContainer {
        height: 100%;
        .avatar {
          height: 80%;
        }
      }
    }
  }
  @media (max-width: 950px) {
    height: auto;

    .bannerContainer {
      width: 90%;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      /* padding: 25px; */
      padding: 40px 0;
      /* & > div {
        width: 100%;
      } */

      .typeWirter {
        width: 100%;
        justify-content: center;

        .introMyself {
          justify-content: center;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          .typeButtons {
            margin: 0;
          }
        }

        .socialIconContainer {
          margin: 0;
        }
      }

      .imageContainer {
        width: 300px;
        border-radius: 50%;
        /* background-color: #525d63; */
        background-color: #1e293b;
        .avatar {
          width: 300px;
          border-radius: 50%;
           border: 5px solid #e11d48;
        }
      }
    }
  }
  @media (max-width: 850px) {
    padding: 0 50px;
    box-sizing: border-box;
    .bannerContainer {
      gap: 15px;
      .typeWirter {
        .introMyself {
        }

        .socialIconContainer {
          margin: 0;
        }
      }

      .imageContainer {
        width: 200px;
        border-radius: 50%;
        .avatar {
          height: 220px;
          border-radius: 50%;
           border: 5px solid #e11d48; 
        }
      }
    }
  }
  @media (max-width: 700px) {
    .bannerContainer {
      width: 100%;
      padding: 40px 0;

      .typeWirter {
        width: 100%;

        .introMyself {
          .heading {
            margin: 0;
            font-size: 25px;
          }

          .subHeading {
            margin: 0;
            font-size: 30px;
            color: #e11d48;
            font-weight: 600;
          }
        }

        .socialIconContainer {
          margin: 0;
        }
      }
    }
  }

  @media (max-width: 580px) {
    padding: 0;
    .bannerContainer {
      width: 100%;

      .typeWirter {
        width: 100%;

        .introMyself {
          .heading {
            margin: 0;
            font-size: 20px;
          }

          .subHeading {
            margin: 0;
            font-size: 22px;
            color: #e11d48;
            font-weight: 600;
          }
        }

        .socialIconContainer {
          margin: 0;
        }
      }
    }
  }
`;

export default BannerCon;
