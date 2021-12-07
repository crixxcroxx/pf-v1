 import styled from "styled-components";

const dv = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);

const FlexItem = styled(dv).attrs(props => ({
  order: props.order || "",
  grow: props.grow || "",
  shrink: props.shrink || "",
  basis: props.basis || "",
  flex: props.flex || "",
  alignSelf: props.alignSelf || "",
}))`
  order: ${props => props.order};
  flex-grow: ${props => props.grow};
  flex-shrink: ${props => props.shrink};
  flex-basis: ${props => props.basis};
  flex: ${props => props.flex};
  align-self: ${props => props.alignSelf};
`;

export default FlexItem
