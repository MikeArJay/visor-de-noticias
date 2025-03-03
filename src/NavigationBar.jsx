import { Container, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"



export const NavigationBar = () =>{

    return(
        <Navbar variant="dark" bg="dark">
            <Container>
                <Navbar.Brand as={Link} to={'/'}>Noticias</Navbar.Brand>
            </Container>
        </Navbar>
    )

}