import styled from "styled-components";
import breakpoint from "../helpers/breakpoints";

const dv = ({ className, children, area }) => (
  <div className={`${area} ${className}`}>
    {children}
  </div>
);

const GridItem = styled(dv).attrs(props => ({
  area: props.area || "",
  spanCol: props.spanCol || "",
  spanRow: props.spanRow || "",
  gridCol: props.gridCol || "",
  gridRow: props.gridRow || "",
  brMin: breakpoint.size.[props.brMin] || breakpoint.size.sm,
  brMax: props.brMax || "",
}))`
  place-items: center;
  grid-area: ${props => props.area};

  ${props => !props.area && `
    grid-column: ${(props.spanCol && `span ${props.spanCol}`) || props.gridCol};
    grid-row: ${(props.spanRow && `span ${props.spanRow}`) || props.gridRow};
  `}


`;

export default GridItem
