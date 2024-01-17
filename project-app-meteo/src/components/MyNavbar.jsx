import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Components.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className="myNavbar">
      <Container>
      <img
              alt=""
              src="logo.png"
              width="80"
              height="80"
              className="d-inline-block align-top"
            />
        <Navbar.Brand href="#home" className='navLink'>Rogweather</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='navLink'>Home</Nav.Link>
            <Nav.Link href="#link" className='navLink'>Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
