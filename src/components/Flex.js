import styled from "styled-components";

const dv = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);

const Flex = styled(dv).attrs(props => ({
  direction: props.row || props.rowRev || props.col || props.colRev,
  wrap: props.wrap || "",
  flow: props.flow || "",

  jusCont: props.jusCont || "",
  aliCont: props.aliCont || "",
  aliItem: props.aliItem || "",

  gap: props.gap || "",
}))`
  display: flex;
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  flex-flow: ${props => props.flow};

  justify-content: ${props => props.jusCont};
  align-content: ${props => props.aliCont};
  align-items: ${props => props.aliItem};

  gap: ${props => props.gap && `${props.gap}rem`};
`;

export default Flex
