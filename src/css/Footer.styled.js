import styled from "styled-components";

const FooterCon = styled.div`
  /* background-color: #0d1117; */
  background-color: #000000;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  box-sizing: border-box;
  align-items: center;
  color: #ffffff;
  gap: 20px;
  .footerCon {
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 15px;
    /* border: 1px solid white; */

    .links {
      width: auto;

      display: flex;
      /* border: 1px solid white; */
      justify-content: center;
      color: #ffffff;
      text-decoration: none;
      align-items: center;
      gap: 15px;
      font-size: 18px;
      font-weight: 400;

      span:first-child {
        /* background-color: red; */
        height: 45px;
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
      }

      &:hover {
        color: #3b82f6;
        transform: scale(1.1);
        transition: 300ms;
      }
    }
  }

  .credits {
    font-size: 14px;
    font-weight: 500;
    span {
      color: #e11d48;
    }
  }

  /* .disabled {
    pointer-events: none;
  } */
`;

export default FooterCon;
