import styled from "styled-components";
import breakpoint from "../helpers/breakpoints";

const areasToString = (areas) => {
  let temp = []

  areas.map(area => temp.push(area.join(" ")))

  return temp.join("' '")

}

const dv = ({ className, children }) => (
  <div className={`grid-parent ${className}`}>
    {children}
  </div>
);

const Grid = styled(dv).attrs(props => ({
  colCount: props.colCount || 12,
  xsAreas: props.xsAreas || "",
  smAreas: props.smAreas || "",
  mdAreas: props.mdAreas || "",
  lgAreas: props.lgAreas || "",
  xlAreas: props.xlAreas || "",
  gap: props.gap || "",
  brMin: breakpoint.size.[props.brMin] || breakpoint.size.sm,
  brMax: props.brMax || "",

  hasAreas: props.xsAreas || props.smAreas || props.mdAreas || props.lgAreas || props.xlAreas
}))`
  display: grid;

  grid-template-columns: ${props => !props.hasAreas && `repeat(${props.colCount}, 1fr)`};

  ${props => props.xsAreas &&
    `grid-template-areas: ${`'${areasToString(props.xsAreas)}'`};`
  }

  ${props => props.smAreas && `
    @media (min-width: ${breakpoint.size.xs}) {
      grid-template-areas: ${`'${areasToString(props.smAreas)}'`};
    }
  `}

  ${props => props.mdAreas &&
    `@media (min-width: ${breakpoint.size.sm}) {
      grid-template-areas: ${`'${areasToString(props.mdAreas)}'`};
    }`
  }

  ${props => props.lgAreas &&
    `@media (min-width: ${breakpoint.size.md}) {
      grid-template-areas: ${`'${areasToString(props.lgAreas)}'`};
    }`
  }

  ${props => props.xlAreas &&
    `@media (min-width: ${breakpoint.size.lg}) {
      grid-template-areas: ${`'${areasToString(props.xlAreas)}'`};
    }`
  }

  gap: ${props => props.gap && `${props.gap}rem`};
  text-align: center;
`;

export default Grid
