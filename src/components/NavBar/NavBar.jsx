import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import logo from "./assets/logo-st.jpg";
import { Link } from "react-router-dom";
import { NavLink } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand href="#home">
            <img
              alt="logo-st"
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link href="#link">Servicio Técnico</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink to="/categoria/procesadores">Procesadores</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/categoria/placas">Placas de Video</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/categoria/monitores">Monitores</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/categoria/perisfericos">Perisféricos</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/categoria/almacenamiento">Almacenamiento</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="cart">
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
