import styled from "styled-components";
import breakpoint from "../helpers/breakpoints";

const Triangle = styled.div`
  position: relative;
  height: 25rem;
  clip-path: ${props => props.reverse
    ? "polygon(100% 0%, 0% calc(100% - 12.5rem), 100% 100%);"
    : "polygon(0% 0%,100% 50%,0% 100%);"
  }
  background-color: ${props => props.reverse
    ? "var(--pink);"
    : "var(--brown-light);"
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: calc(50% * inherit);
    inset: 50% 0 0 0;
    clip-path: ${props => props.reverse
      ? "polygon(100% 0%, 0% calc(50% + 7.25rem), 100% 100%);"
      : "polygon(0% 0%, 100% calc(50% + 7.25rem), 0% 100%);"
    }
    background-color: var(--blue);
  }

  z-index: 5;

  @media (min-width: ${breakpoint.size.sm}) {
    height: 30rem;
  }
`;

export default Triangle

//margin-top: -34vh;