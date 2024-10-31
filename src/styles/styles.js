import styled from "styled-components";

export const Container = styled.div`
  background: transparent;
  color: #abc;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
  padding: 2rem 0 2rem 2rem;
  scrollbar-width: thin;

  @media screen and (max-width: 650px) {
    padding: 1.25rem;
  }
`;

export const NotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const EmptyMsgBox = styled.div`
  background-color: rgba(42, 65, 165, 0.4);
  border: 1px solid var(--primary-color);
  border-radius: 0.5em;
  font-size: clamp(1.2rem, 2vw, 1.3rem);
  font-weight: 400;
  padding: 2rem 0;
  text-align: center;
  width: calc(100% - 2rem);
`;

export const ButtonFill = styled.button`
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
  color: #abc;
  cursor: pointer;
  font size: clamp(14px, 1.5vw, 1rem);
  padding: 0.375rem 1rem;
  transition: 250ms background-color ease-in-out;
  white-space: nowrap;

  svg {
    font-size: clamp(14px, 3vw, 1rem);
    margin-right: 5px;
    vertical-align: -0.175em;
  }
    
  span {
    font-size: clamp(14px, 3vw, 1rem);
    font-weight: 400;
  }


  &:hover {
    background-color: #3F51B5;
  }

  @media screen and (max-width: 600px) {
    padding: 6px 12px;
  }
`;

export const ButtonOutline = styled.button`
  background-color: #212527;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-shadow: 0px 0px 3px 0px rgb(0, 0, 0, 0.3);
  color: #abc;
  cursor: pointer;
  font size: clamp(14px, 1.5vw, 1rem);
  padding: 0.375rem 1rem;
  transition: 250ms background-color ease-in-out;
  white-space: nowrap;

  svg {
    font size: clamp(14px, 1.5vw, 1rem);
    vertical-align: -0.175em;
  }

  span {
    font-weight: 400;
    font-size: clamp(14px, 1.5vw, 1rem);
    margin-left: 5px;
  }

  &:hover {
    background-color: rgba(250, 250, 250, 0.1);
  }

  @media screen and (max-width: 600px) {
    padding: 6px 12px;
  }
`;

export const NotesIconBox = styled.span`
  cursor: pointer;
  padding: 0 6px;

  svg {
    color: var(--color-link);
    font-size: 1em;
    transition: 250ms color ease-in-out;
  }

  &:hover {
    svg {
      color: var(--color-hover);
    }
  }
`;
