import styled from "styled-components";
import breakpoint from "../helpers/breakpoints";

const FlexItem = styled.div.attrs(props => ({
  order: props.order || "",
  grow: props.grow || "",
  shrink: props.shrink || "",
  basis: props.basis || "",
  flex: props.flex || "",
  alignSelf: props.alignSelf || "",

  hide: props.hide || "",
}))`
  order: ${props => props.order};
  flex-grow: ${props => props.grow};
  flex-shrink: ${props => props.shrink};
  flex-basis: ${props => props.basis};
  flex: ${props => props.flex};
  align-self: ${props => props.alignSelf};

  ${props => props.hide &&
    `@media (max-width: ${breakpoint.size[props.hide]}) {
      display: none;
    }`
  }
`;

export default FlexItem
