import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: 15rem;
  border-radius: var(--border-radius);
  background-color: var(--pink);

  .card__img {
    aspect-ratio: 1 / 1;
    filter: grayscale(50%);
    border-radius: var(--border-radius-top);
    background-color: var(--black-100);
  }

  &:hover {
    .card__img {
      filter: grayscale(10%);
    }
  }

  .card__title {
    margin-block-start: 1rem;
    margin-inline-start: 1rem;
    font-size: 1.3rem;
    font-weight: 600;
  }

  .card__content {
    font-size: 1.125rem;

    .card__content-stack {
      display: flex;
      gap: 0.5rem;

      margin-inline: 1rem;
      padding: 0.2rem;
      font-size: 0.8rem;
      color: var(--blue);
    }

    .card__content-desc {
      padding: 0.5rem 1rem;
    }

    .card__content-btn {
      display: flex;
      justify-content: center;
      gap: 1rem;

      height: min-content;
      padding-block: 1rem;
      border-top: 1px solid var(--white-off);
    }
  }
`;

export default Card