import { Card, Col, Container, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { newsContext } from './NewsProvider';
import { useContext } from 'react';


export const NewsList = () => {
const {noticias} = useContext(newsContext);

    return (
        <Container>
            <Row className='text-center'><h1>Actualidad</h1></Row>
            <Row className='mt-4'>
                {noticias?.length > 0 &&

                    noticias.map((noticia, index) =>
                        <Col key={index} sm={12} md={6} className='mb-3 d-flex'>
                            <Card 
                            bg='light'
                            className='w-100 d-flex text-center' 
                            as={Link} 
                            to={'/news/' + index}>
                                <Card.Title>{noticia.titulo}</Card.Title>
                            </Card>
                        </Col>

                    )


                }
            </Row>
        </Container>

    );
}