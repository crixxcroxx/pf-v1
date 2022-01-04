import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: 15rem;
  color: var(--blue);
  border-radius: var(--border-radius);
  background-color: var(--pink);

  .card__img {
    aspect-ratio: 1 / 1;
    border-radius: var(--border-radius-top);
  }

  .card__title {
    margin-inline-start: 1rem;
    font-size: 1.25rem;
  }

  .card__content {
    font-size: 0.9rem;

    .card__content-stack {
      display: flex;
      gap: 0.5rem;

      margin-inline-start: 1rem;
    }

    .card__content-desc {
      padding: 0.5rem 1rem;
    }

    .card__content-btn {
      display: flex;
      justify-content: center;
      gap: 1rem;

      padding-block: 1rem;
      border-top: 1px solid var(--white);

      button {
        padding: 0.3rem 1rem;
      }
    }
  }
`;

export default Card