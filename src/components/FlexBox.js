import styled from "styled-components";
import breakpoint from "../helpers/breakpoints";

const FlexBox = styled.div.attrs(props => ({
  cols: props.cols || "33%",
  content: props.content || "70%",
  sidebar: props.sidebar || "30%"
}))`
  display: flex;
  flex-direction: ${props => props.col && "column"};
  flex-wrap: ${props => props.wrap};
  flex-flow: ${props => props.flow};

  justify-content: ${props => props.jusCont};
  align-content: ${props => props.aliCont};
  align-items: ${props => props.aliItem};

  gap: ${props => props.gap}rem;

  ${props => props.evenCols && `
    > * { flex-basis: 100%; }
  `}

  ${props => props.gridish && `
    flex-wrap: wrap;
    > * { flex: 1 1 ${props.cols}; }
  `}

  ${props => props.content_sidebar && `
    flex-wrap: wrap;
    .content { flex: 1 1 ${props.content}%; }
    .sidebar { flex: 1 1 ${props.sidebar}%; }
  `}

  ${props => props.sideHide && `
    @media (max-width: ${breakpoint.size[props.sideHide]}) {
      .content { flex-basis: 100%; }
      .sidebar { display: none; }
    }
  `}

  ${props => props.hide &&
    `@media (max-width: ${breakpoint.size[props.hide]}) {
      display: none;
    }`
  }

`;

export default FlexBox
