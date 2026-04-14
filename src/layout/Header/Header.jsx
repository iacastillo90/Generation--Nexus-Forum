import "./Header.css";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

function Header() {
    return (
        <Navbar expand="lg" className="bg-black border-bottom border-neon-green" variant="dark">
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/" className="text-neon-cyan fs-3 fw-bold cyber-logo">
                    NX-Forum
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className="border-neon-cyan" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "150px" }}
                        navbarScroll
                    >
                        <Nav.Link as={NavLink} to="/" className="neon-link">
                            [Inicio]
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/posts" className="neon-link">
                            [Publicaciones]
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/users" className="neon-link">
                            [Camaradas]
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/about" className="neon-link">
                            [Nosotros]
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Buscar en el sistema..."
                            className="me-2 cyber-input"
                            aria-label="Search"
                        />
                        <Button variant="outline-neon" className="cyber-btn">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
