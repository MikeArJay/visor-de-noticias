import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { newsContext } from "./NewsProvider"




export const NavigationBar = () => {
    const {categorias}= useContext(newsContext) ;

    return (
        <Navbar variant="dark" bg="dark">
            <Container>
                <Navbar.Brand as={Link} to={'/'}>Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Noticias" id="basic-nav-dropdown">
                            {categorias && categorias.map((categoria) =>
                            <NavDropdown.Item key={categoria} as={Link} to={"news/categorias/"+categoria}>{categoria}</NavDropdown.Item>
)}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}