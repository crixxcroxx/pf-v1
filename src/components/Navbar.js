import styled from "styled-components";

// const nav = ({className, children}) => (
//   <nav className={className}>
//     {children}
//   </nav>
// );

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 1.5rem;

  z-index: 10;
`;

export default Navbar