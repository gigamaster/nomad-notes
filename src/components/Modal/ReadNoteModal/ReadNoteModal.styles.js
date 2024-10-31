import styled from "styled-components";

export const Box = styled.div`
  background-color: #212527;
  border-radius: 0.5rem;
  color: #abc;
  max-height: 90vh;
  overflow-y: auto;
  padding: 1rem 1rem 1.25rem;
  scrollbar-color: #2a2f32 #212527;
  scrollbar-width: thin;
  width: clamp(250px, 90%, 350px);

  .readNote__close-btn {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .readNote__title {
    font-size: clamp(1rem, 2vw, 1.2rem);
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .readNote__content {
    font-size: clamp(14px, 1.5vw, 1rem);
    padding: 0 1em;

    img {
      width: 100%;
      border-radius: 0.5em;
    }
  }
`;
