import styled from "styled-components";
import breakpoint from "../helpers/breakpoints";

const div = ({className}) => (
  <div className={className}>
    <div></div>
    <div></div>
  </div>
);

const BurgerMenu = styled(div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 30px;
  height: 25px;
  background-color: var(--blue);

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 3px 1px #c82a2a2a;
  }

  > * {
    width: inherit;
    height: 5px;
    background-color: var(--white);
  }

  @media (min-width: ${breakpoint.size.sm}) {
    display: none;
  }
`;

export default BurgerMenu
