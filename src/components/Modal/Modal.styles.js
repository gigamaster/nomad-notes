import styled from "styled-components";

export const FixedContainer = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  height: 100vh;
  justify-content: center;
  position: fixed;
  right: 0px;
  top: 0px;
  width: 100%;
  z-index: 5;
`;

export const DeleteBox = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 35px;

  svg {
    color: rgba(250, 250, 250, 0.5);
    font-size: 1.2rem;
    transition: 250ms transform ease-in-out, 200ms color ease-in-out;

    &:hover {
      color: rgba(250, 250, 250, 0.8);
      transform: scale(1.15);
    }
  }
`;
