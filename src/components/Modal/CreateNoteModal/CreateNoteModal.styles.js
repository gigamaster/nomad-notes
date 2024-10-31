import styled from "styled-components";

export const Box = styled.div`
  width: clamp(250px, 95%, 750px);
  background-color: #212527;
  color: #abc;
  border-radius: 10px;
  padding: 20px 18px 25px;

  .createNote__create-btn {
    display: flex;
    justify-content: flex-end;
  }
`;

export const TopBox = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  .createNote__title {
    font-weight: 300;
    font-size: clamp(1.25rem, 2vw, 1.5rem);
  }
  .createNote__close-btn {
    svg {
      color: #abc;
      font-size: clamp(1.25rem, 2vw, 1.5rem);
    }
  }
`;

export const StyledInput = styled.input`
  background-color: #171a1c80;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.5em;
  color: #abc;
  font-size: clamp(1rem, 2vw, 1.125rem);
  height: 40px;
  margin: 20px 0 10px;
  outline: none;
  text-indent: 1rem;
  transition: 250ms box-shadow ease-in;
  user-select: none;
  width: 100%;
`;

export const AddedTagsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;

  div {
    align-items: center;
    background-color: rgba(0, 0, 0, 0.15);
    border: none;
    border-radius: 0.5em;
    color: rgba(250, 250, 250, 0.7);
    display: flex;
    font-size: 13px;
    font-weight: 400;
    margin-right: 0.5em;
    padding: 4px 4px 4px 8px;

    span {
      display: flex;
      align-items: center;
    }

    .createNote__tag {
      color: rgba(250, 250, 250, 0.7);
      margin-right: 0.5em;
    }

    .createNote__tag-remove {
      color: #bf360c;
      cursor: pointer;
      padding: 2px;
    }
  }
`;
export const OptionsBox = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 1.5rem;

  button {
    background-color: #2e3538;
    color: #abc;

    span {
      margin: 0 0.25rem;
    }
  }

  select {
    background-color: #2e3538;
    border: none;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
    box-shadow: 0px 0px 3px 0px rgb(0, 0, 0, 0.3);
    color: #abc;
    font-size: clamp(14px, 1.5vw, 1rem);
    padding: 5px 10px;
    user-select: none;
    outline: none;
  }
  label {
    font-size: clamp(14px, 1.5vw, 1rem);
  }
`;
