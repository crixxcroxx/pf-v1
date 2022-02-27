import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  width: 15rem;
  background-color: var(--brown);

  .card__img {
    aspect-ratio: 1 / 1;
    background-color: var(--black-100);
  }

  &:hover {
    .card__img {
      filter: blur(0.5px);
    }
    .card__content {
      display: grid;
      background: linear-gradient(
        318deg,
        rgba(235, 168, 146, 0.9) 0%,
        rgba(227, 205, 198, 0.8) 20%,
        rgba(46, 52, 54, 0.9) 100%
      );
    }
  }

  .card__title {
    margin-block: 1rem;
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
  }

  .card__content {
    display: none;
    position: absolute;
    inset: 0 0 4rem 0;
    z-index: 5;
    font-size: 1.125rem;

    > * {
      place-self: center;
    }

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
    }
  }
`;

export default Card;
