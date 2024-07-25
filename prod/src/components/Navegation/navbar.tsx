
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #007bff;
  color: white;
`;

const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 15px;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/novo-produto">Novo Produto</NavbarLink>
    </NavbarContainer>
  );
};

export default Navbar;