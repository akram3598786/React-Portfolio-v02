import styled from "styled-components";

const ProjectsCon = styled.div`
  height: auto;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  // background-color: #1e293b;
   background-color: darkslategray;

  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  //Container
  .projectCon {
    box-sizing: border-box;
    padding: 50px 0;
    /* border: 1px solid white; */
    width: 80%;

    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, 425px);
    grid-template-rows: auto;
    gap: 60px;
    column-gap: 150px;
    & > div {
      /* border: 1px solid red; */
      background-color: #0d1117;
      border-radius: 8px;
      height: 600px;
      transition: transform 0.5s ease;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @media (max-width: 1430px) {
    .projectCon {
      width: 100%;
    }
  }

  @media (max-width: 1160px) {
    .projectCon {
      column-gap: 100px;
    }
  }

  @media (max-width: 1160px) {
    .projectCon {
      column-gap: 80px;
      grid-template-columns: repeat(2, 400px);
    }
  }

  @media (max-width: 950px) {
    .projectCon {
      /* column-gap: 60px; */
      grid-template-columns: repeat(1, 400px);
    }
  }

  @media (max-width: 600px) {
    padding: 20px 0;
    .projectCon {
      padding: 30px 0;
      /* column-gap: 60px; */
      grid-template-columns: repeat(1, 400px);
    }
  }

  @media (max-width: 470px) {
    .projectCon {
      /* column-gap: 60px; */
      grid-template-columns: repeat(1, 340px);

      & > div {
        height: 600px;
      }
    }
  }
`;

export default ProjectsCon;
