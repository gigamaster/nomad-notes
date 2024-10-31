import styled from "styled-components";

export const TopBox = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0 0 2rem;

  .notes__filter-btn {
    flex-basis: 65%;
    text-align: start;
    button {
      background-color: #212527;
      color: #abc;
      margin-right: 0px;
    }
  }

  @media screen and (max-width: 650px) {
    justify-content: space-between;
    .notes__filter-btn {
      flex-basis: 5%;
      button {
        margin-right: 0px;
      }
      span {
        display: none;
      }
    }
  }
`;

export const InputBox = styled.div`
  background-color: #212527;
  color: #abc;
  flex: 1;
  height: 33px;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  transition: 300ms box-shadow ease-in;
  margin-right: 20px;

  &:hover {
    box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.4);
  }

  input {
    background-color: #212527;
    border: none;
    border-radius: 5px;
    color: #abc;
    height: 100%;
    font-family: system-ui, sans-serif;
    font-size: clamp(14px, 1.5vw, 1rem);
    outline: none;
    padding: 0px 10px;
    user-select: none;
    width: 100%;

    &::placeholder {
      color: rgba(250, 250, 250, 0.3);
    }
  }

  .notes__search-icon {
    align-items: center;
    background-color: rgba(0, 0, 0, 0.06);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    color: #abc;
    display: flex;
    flex-basis: 10%;
    height: 100%;
    justify-content: center;
    min-width: 35px;

    svg {
      font-size: clamp(14px, 1.5vw, 1rem);
      vertical-align: -0.175em;
    }
  }
`;

export const Box = styled.div`
  .allNotes__notes-type {
    color: rgba(250, 250, 250, 0.5);
    font-weight: 400;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;

    span {
      color: inherit;
      font-weight: 400;
      font-size: 15px;
    }
  }
`;
