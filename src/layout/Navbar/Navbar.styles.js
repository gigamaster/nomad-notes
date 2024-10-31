import styled from "styled-components";

export const StyledNav = styled.div`
  background: transparent;
  color: #abc;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 30px;

  .nav__menu {
    display: none;
  }

  @media screen and (max-width: 950px) {
    padding: 0 1rem;
    .nav__menu {
      display: block;
      flex-basis: 5%;
      margin: 8px 10px 0px 0px;
      svg {
        font-size: 1.5rem;
        cursor: pointer;
      }
    }
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-top: 1.5rem;

  .nav__page-title {
    font-weight: 600;
    font-size: clamp(1rem, 2vw, 1.5rem);
  }

  @media screen and (max-width: 950px) {
    justify-content: space-between;
  }
`;
