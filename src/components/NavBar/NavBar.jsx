import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import logo from "./assets/logo-st.jpg";
import { Link } from "react-router-dom";
import { NavLink } from "react-bootstrap";
import "./NavBar.css";
import { useCartContext } from "../Context/CartContext";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">
            <img
              alt="logo-st"
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
            />{" "}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink>
              <Link className="botonesNav" to="/">
                {" "}
                Home
              </Link>
            </NavLink>
            <NavLink>
              <Link className="botonesNav" to="/">
                Servicio Técnico
              </Link>
            </NavLink>
            <NavDropdown
              className="botonesNav"
              title="Productos"
              id="basic-nav-dropdown"
            >
              <li>
                <Link className="categorias" to="/category/Procesadores">
                  Procesadores
                </Link>
              </li>

              <li>
                <Link className="categorias" to="/category/Placas de Video">
                  Placas de Video
                </Link>
              </li>

              <li>
                <Link className="categorias" to="/category/Monitores">
                  Monitores
                </Link>
              </li>

              <li>
                <Link className="categorias" to="/category/Perisféricos">
                  Perisféricos
                </Link>
              </li>

              <li>
                <Link className="categorias" to="/category/Almacenamiento">
                  Almacenamiento
                </Link>
              </li>
            </NavDropdown>
            <Link to="/cart">
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
