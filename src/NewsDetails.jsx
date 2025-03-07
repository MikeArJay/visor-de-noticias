import { useContext, useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom";
import { newsContext } from "./NewsProvider";

export const NewsDetails = () => {
    const { noticias } = useContext(newsContext);
    const [noticiasDetalle, setNoticiaDetalle] = useState([]);

    const { id, categoria } = useParams();
    const numericId = id ? parseInt(id, 10) : null;

    useEffect(() => {
        if (numericId !== null && noticias.length > 0) {
            setNoticiaDetalle([noticias[numericId]]);
        }
    }, [numericId, noticias]);

    useEffect(() => {
        if (categoria !== undefined && noticias.length > 0) {
            setNoticiaDetalle(noticias.filter(noticia => noticia.categoria === categoria));
        }
    }, [categoria, noticias]);
    




    return (
        <Container>
            {noticiasDetalle?.length > 0  && 
            
            noticiasDetalle.map((noticia, index) =>
                <Card sm={12} bg="light" className="m-5" key={index}>
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
            )}
        </Container>
    )
}