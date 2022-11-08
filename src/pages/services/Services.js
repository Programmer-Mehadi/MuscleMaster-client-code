import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

const Services = () => {
    const services = useLoaderData()
    return (
        <div className='container py-5'>
            <Row xs={1} md={2} lg={3} className="g-2">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <>
                        {services !== null ? services.map((service) =>
                            <ServiceCard service={service}></ServiceCard>
                        ) : ''}
                    </>
                ))}
            </Row>
        </div>
    );
};

export default Services;