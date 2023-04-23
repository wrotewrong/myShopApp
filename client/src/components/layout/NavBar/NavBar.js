import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" className="mt-4 mb-4 rounded">
      <div className="container">
        <Navbar.Brand href="/">myShopApp</Navbar.Brand>
        <Nav className="me-auto row justify-content-end">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/cart">
            Cart
          </Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default NavBar;
