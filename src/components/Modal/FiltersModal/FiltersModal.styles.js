import styled from "styled-components";

export const Container = styled.div`
  background-color: #212527;
  border-radius: 0.5rem;
  color: #abc;
  padding: 1.25rem;
  width: clamp(250px, 90%, 270px);

  .filters__close {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    svg {
      font-size: 1.25rem;
    }
  }
`;

export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 2rem;

  .filters__title {
    flex-basis: 25%;
    font-size: clamp(1rem, 2vw, 1.2rem);
    font-weight: 400;
    margin-right: 20px;
  }

  .filters__delete {
    background: rgba(242, 27, 27, 0.25);
    border: 1px solid rgb(242, 27, 27);
    border-radius: 0.5rem;
    color: rgb(242, 27, 27);
    cursor: pointer;
    font-weight: 400;
    font-size: clamp(14px, 1.5vw, 1rem);
    padding: 0.25rem 0.5rem;

    &:hover {
      border-color: rgba(242, 27, 27, 0.25);
      color: rgb(234, 72, 72);
    }
  }
`;

export const Box = styled.div`
  color: inherit;
  margin-top: 20px;

  .filters__subtitle {
    font-size: clamp(14px, 1.5vw, 1rem);
    font-weight: 400;
    margin-bottom: 10px;
    color: rgba(250, 250, 250, 0.7);
  }

  .filters__check {
    align-items: center;
    border: 2px solid transparent;
    border-radius: 0.5em;
    color: inherit;
    display: flex;
    font-size: clamp(14px, 1.5vw, 1rem);
    font-weight: 400;
    padding: 0.5em 1em;
    transition: all 300ms ease-in;

    &:hover,
    &:has(input:checked) {
      border-color: var(--primary-color);
      background-color: #2a2f32;
    }

    input {
      width: 13px;
      height: 13px;
      margin-right: 0.5rem;
      cursor: pointer;
    }
    label {
      cursor: pointer;
      user-select: none;
    }
  }
`;
