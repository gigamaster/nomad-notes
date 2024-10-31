import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px 30px;

  .error__img {
    max-width: 420px;
    img {
      width: 420px;
    }
  }
  .error__text {
    h1 {
      font-size: clamp(1.4rem, 2.5vw, 2.5rem);
      margin-bottom: 1.5rem;
    }
    h2 {
      font-size: clamp(1.25rem, 2vw, 2rem);
      margin-bottom: 1rem;
    }
    div {
      margin-bottom: 30px;
      font-size: clamp(1.2rem, 2vw, 1.5rem);
      font-weight: 400;
    }
  }
  @media only screen and (max-width: 950px) {
    flex-direction: column;
    justify-content: center;
    .error__img {
      margin-bottom: 3rem;
    }
  }
`;
