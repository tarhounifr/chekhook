import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from '../Rating/Rating'
import './MovieCard.css'

const MovieCard = ({ movie, movierating }) => {
    return (
        <div>
            <Card className="card" >
                <Card.Img className="cardimg" src={movie.img} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        <Rating filterrating={false} movierating={movie.rating} />
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
