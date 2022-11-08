import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    const {_id,image,serviceName,rating,price,description } = service;
    return (
        <Col>
            <Card style={{ marginBottom: '10px',minHeight:'450px' }}>
                <Card.Img variant="top" style={{height:'200px'}} src={image} />
                <Card.Body>
                    <Card.Title>{serviceName}</Card.Title>
                    <Card.Text>
                         {description.length > 100 ? `${description.slice(0,100)}...`: description}
                    </Card.Text>
                    <Card.Text>Rating: {rating}
                    </Card.Text>
                    <Card.Text>price: {price}
                    </Card.Text>
                    <Button variant="primary"> <Link style={{color:'white',textDecoration:'none'}} to={`/service/${_id}`}>View details</Link> </Button>
                </Card.Body>
            </Card>
            </Col>
    );
};

export default ServiceCard;