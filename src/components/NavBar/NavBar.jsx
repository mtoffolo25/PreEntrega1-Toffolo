import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import logo from "./assets/logo-st.jpg"

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img
              alt="logo-st"
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
            />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Servicio Técnico</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Procesadores</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Placas de Video
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Monitores</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Perisféricos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Mothers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Fuentes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Almacenamiento</NavDropdown.Item>
            </NavDropdown>
            <CartWidget/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar