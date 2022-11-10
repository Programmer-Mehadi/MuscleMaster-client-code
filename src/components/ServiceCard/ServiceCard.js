import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

import './ServiceCard.css';
const ServiceCard = ({ service }) => {
    const { _id, image, serviceName, rating, price, description } = service;
    return (
        <Col >
            <Card className="shadow rounded-0" style={{ marginBottom: '10px', minHeight: '450px',zIndex:'3' }}>
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img src={image} alt="" className='p-3 image' style={{ height: '200px' }} />
                    </PhotoView>
                </PhotoProvider>
                <Card.Body>
                    <Card.Title>{serviceName}</Card.Title>
                    <Card.Text>
                        {description.length > 100 ? `${description.slice(0, 100)}...` : description}
                    </Card.Text>
                    <Table striped bordered rounded hover>
                        <thead>
                            <tr>
                                <th className='text-center'>{price}<br />Price</th>
                                <th className='text-center'>{rating}<br />Rating</th>
                            </tr>
                        </thead>

                    </Table>

                    <Button className='w-100 rounded-0' variant="primary"> <Link style={{ color: 'white', textDecoration: 'none' }} to={`/services/${_id}`}>View details</Link> </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ServiceCard;