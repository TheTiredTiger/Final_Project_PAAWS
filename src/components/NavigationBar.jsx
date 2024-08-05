// Navbar with logo(?) and labels for Home, Pets (or Search, something of the sort) on the left, user icon (or picture?) and cart on the right

// Should be able to collapse on smaller devices

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
/* import NavDropdown from 'react-bootstrap/NavDropdown'; */

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{"alignItems": "flex-end"}}>
      <Container>
        <Navbar.Brand href="#brand">
            <i className="fa-solid fa-paw" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#ourPets">Our Pets</Nav.Link>
            <Nav.Link href="#payment">Payment Plans</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#user">
                <i className="fa-solid fa-user me-3" />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#cart">
                <i className="fa-solid fa-cart-shopping" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;