import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import useTitle from '../../hooks/useTitle';
import Spinner from 'react-bootstrap/Spinner';
const Services = () => {

    useTitle('Services');
    const [thisLoading, setThisLoading] = useState(false)
    const [services, setServices] = useState([]);

    useEffect(() => {
        setThisLoading(true)
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
                setThisLoading(false)
            })
    }, [])

    return (
        <div className='container py-5'>
            {
                thisLoading && <div className="d-flex justify-content-center flex-column align-items-center mx-auto"> <Spinner animation="border" />
                    <div>loading....</div> </div>
            }
            <h2 className='text-center underline pt-3 pb-5'>All Services Here</h2>
            <Row xs={1} md={2} lg={3} className="g-2">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <>
                        {services !== null ? services.map((service) =>
                            <ServiceCard key={service._id} service={service}></ServiceCard>
                        ) : ''}
                    </>
                ))}
            </Row>

        </div>
    );
};

export default Services;