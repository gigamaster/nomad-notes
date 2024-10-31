import styled from "styled-components";

export const Card = styled.div`
  width: clamp(250px, 100%, 270px);
  height: 220px;
  border-radius: 0.5em;
  box-shadow: 0px 1.5px 3px 0px rgba(0, 0, 0, 0.5);
  padding: 1em;
  margin: 0px 2rem 2rem 0px;
  background-color: #2c353a;
  transition: 250ms box-shadow ease-in-out, 300ms transform ease-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.5);
  }

  @media screen and (max-width: 600px) {
    margin-right: 0px;
    width: 100%;
  }
`;

export const TopBox = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  .noteCard__title {
    font-weight: 400;
    font-size: 1.15rem;
    cursor: pointer;
  }

  .noteCard__top-options {
    align-items: flex-start;
    display: flex;
    white-space: nowrap;

    .noteCard__priority {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 0.5em;
      color: #eee;
      font-size: 11px;
      font-weight: 400;
      padding: 0 4px;
      text-transform: uppercase;
    }

    .noteCard__pin {
      color: #eee;
      svg {
        font-size: 1rem;

        &:hover {
          color: #fff;
          transform: scale(1.15);
        }
      }
    }
  }
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 95px;
  margin: 0.5rem 0;
  font-size: 14px;
  cursor: pointer;
  overflow-y: hidden;

  img {
    width: 80px;
    height: 65px;
    border-radius: 0.5rem;
  }
`;

export const TagsBox = styled.div`
  height: 24px;
  overflow-x: auto;

  span {
    display: inline;
    background-color: rgba(0, 0, 0, 0.25);
    color: rgba(250, 250, 250, 0.7);
    padding: 2px 5px;
    border-radius: 5px;
    font-size: 11px;
    font-weight: 400;
    margin-right: 0.5rem;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FooterBox = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0.5em;
  display: flex;
  justify-content: space-between;
  padding: 0.25em 0.5em;

  .noteCard__date {
    color: rgba(250, 250, 250, 0.5);
    font-size: 12px;
    font-weight: 400;
  }
`;
