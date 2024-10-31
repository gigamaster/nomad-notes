import styled from "styled-components";

export const Container = styled.nav`
  @media screen and (max-width: 950px) {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transition: 200ms visibility ease-in-out, 250ms background-color ease-in-out;
    visibility: ${({ openMenu }) =>
      openMenu === "open" ? "normal" : "hidden"};
    background-color: ${({ openMenu }) =>
      openMenu === "open" ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0)"};
    cursor: pointer;
  }
`;

export const MainBox = styled.div`
  background-color: #1c1f21;
  color: #abc;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  width: 250px;

  @media screen and (max-width: 950px) {
    position: absolute;
    transition: 350ms transform ease-in-out;
    transform: ${({ openMenu }) =>
      openMenu === "open" ? "translateX(0%)" : "translateX(-100%)"};
    z-index: 10;
  }
`;

export const StyledLogo = styled.div`
  align-items: center;
  display: flex;
  font-size: clamp(1rem, 2vw, 1.25rem);
  margin-bottom: 1rem;
  padding: 1.5rem;

  i {
    font-size: inherit;
  }

  span {
    color: #abc;
    font-size: inherit;
    font-weight: 500;
    margin: 0 0.5rem;
  }
`;

export const ItemsBox = styled.ul`
  max-height: calc(100vh - 160px);
  overflow-y: auto;
  scrollbar-color: #2a2f32 #212527;
  scrollbar-width: thin;

  li {
    align-items: center;
    cursor: pointer;
    display: flex;
    font-size: clamp(1rem, 2vw, 1.125rem);
    font-weight: 400;
    height: 42px;
    list-style: none;
    width: 100%;

    svg {
      font-size: clamp(1rem, 2vw, 1.125rem);
      margin-right: 20px;
      vertical-align: -0.175em;
    }

    a {
      align-items: center;
      display: flex;
      height: 100%;
      padding-left: 1.5rem;
      width: 100%;
    }

    .active-item {
      background-color: rgba(125, 126, 128, 0.2);
      border-left: 5px solid var(--primary-color);
    }

    .inactive-item {
      border-left: 5px solid #2a2f32;
      transition: 250ms background-color ease-in-out,
        250ms border-left ease-in-out;

      &:hover {
        background-color: rgba(125, 126, 128, 0.2);
        border-left-color: rgb(250, 250, 250);
      }
    }
  }

  .sidebar__edit-item {
    border-left: 5px solid #2a2f32;
    padding-left: 20px;
    transition: 250ms background-color ease-in-out,
      250ms border-left ease-in-out;

    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
      border-left-color: rgb(250, 250, 250);
    }
  }
`;

export const ItemTools = styled.div`
  align-items: center;
  background: #212527;
  column-gap: 0.25em;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
  margin-top: auto;
  padding: 1rem;

  a {
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid #292f32;
    border-radius: 0.375em;
    padding: 0.5rem 0;
    text-align: center;
    width: 33%;

    span {
      font-size: 9px;
      text-transform: uppercase;
    }

    svg {
      color: #abc;
      font-size: 1.25rem;
      margin: 0 1rem;
    }
  }
`;
