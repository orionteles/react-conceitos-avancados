import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const Filmes = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        apiFilmes.get('movie/popular?language=pt-BR').then(dados => {
            setFilmes(dados.data.results)
        })
    }, [])

    return (
        <>
            <Row>

                {filmes.map(filme => (
                    <Col md={3} key={filme.id}>
                        <Card>
                            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    {filme.title}
                                </Card.Text>
                                <Link to={'/filmes/' + filme.id}>
                                    <Button variant="primary">Go somewhere</Button>
                                </Link>
                            </Card.Body>
                        </Card>                    
                    </Col>                    
                ))}
            </Row>
        </>
    )
}

export default Filmes
