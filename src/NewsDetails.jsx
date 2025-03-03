import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom";

export const NewsDetails = ({ noticias }) => {
    const [noticia, setNoticia] = useState({});

    const { id } = useParams();

    useEffect(() => {
        setNoticia(noticias[id]);
    }, [id, noticias])




    return (
        <Container>
            {noticia &&
                <Card sm={12} bg="light" className="m-5">
                    <Card.Header as="h3">{noticia.categoria}</Card.Header>
                    <Card.Body>
                        <Card.Title as="h2">{noticia.titulo}</Card.Title>
                        <Card.Text>{noticia.contenido}</Card.Text>
                   

                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Container>
                            <Row>
                                <Col>{noticia.autor}</Col>
                                <Col className="text-end">{noticia.fecha}</Col>
                            </Row>
                        </Container>
                    
                    </Card.Footer>
                </Card>
            }
        </Container>
    )
}