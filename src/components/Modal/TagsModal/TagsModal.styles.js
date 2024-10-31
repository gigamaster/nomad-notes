import styled from "styled-components";

export const Box = styled.div`
  background-color: #212527;
  border-radius: 0.5em;
  color: #abc;
  padding: 1rem 1.25rem;
  width: clamp(270px, 60%, 290px);

  .editTags__header {
    align-items: center;
    display: flex;
    justify-content: space-between;

    .editTags__title {
      font-size: 1.3rem;
      font-weight: 400;
    }

    .editTags__close {
      svg {
        font-size: 1.5rem;
      }
    }
  }

  form {
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 30px;
    margin: 1.5rem 0px;
    width: 100%;
  }
`;

export const StyledInput = styled.input`
  background-color: #131516;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom-color: #2a2f31;
  border-radius: 0.375em;
  color: #abc;
  height: 100%;
  font-family: system-ui, sans-serif;
  font-size: clamp(14px, 1.5vw, 1rem);
  font-weight: 400;
  text-indent: 5px;
  transition: 150ms border ease-in;
  outline: none;
  user-select: none;
  width: 100%;

  &:focus {
    box-shadow: 0 0 0 3px #2a2f31;
  }

  &::placeholder {
    color: rgba(250, 250, 250, 0.2);
  }
`;

export const TagsBox = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    margin: 0;
    max-height: 50vh;
    overflow-y: auto;
    padding: 0;
    scrollbar-color: #2a2f32 #212527;
    scrollbar-width: thin;

    li {
      border-bottom: 1px dotted transparent;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.125rem;
      height: 30px;
      margin-bottom: 10px;
      transition: 350ms color ease-in-out;

      &:hover {
        border-bottom-color: #404246;
      }

      .editTags__tag {
        color: #abc;
        width: 100%;
      }
    }
  }
`;

export const AddBox = styled.div`
  align-items: center;  
  background-color: #2a2f32;
  border: 1px solid #131516;
  border-radius: 0.375em;
  cursor: ${({ check }) => (check ? "pointer" : "normal")};
  display: flex;  
  height: 100%;
  justify-content: center;
  margin-left: 10px;
  position: relative;
  width: 35px;

  svg {
    color: ${({ check }) =>
      check ? "rgba(250, 250, 250, 1)" : "rgba(250, 250, 250, 0.3)"};
    font-size: clamp(14px,1.5vw,1rem)
    transition: 350ms color ease-in-out;
  }
`;
