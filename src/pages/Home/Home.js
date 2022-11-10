import React from 'react';
import { Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
const Home = () => {
    const services = useLoaderData()
    console.log(services);
    return (
        <div className='home-container container py-5'>
            <div className='row'>
                <div className='col-lg-6 d-flex flex-column justify-content-center'>
                    <h2>Massage Is Therapy</h2>
                    <p>Whether you’re looking for a relaxing massage to rejuvenate your spirit or need a therapeutic massage to relieve muscle pain, our licensed Massage Therapists will customize your massage to your individual needs!</p>
                    <div>
                        <Link to='/services'><button className='btn btn-primary  border-0 w-auto'>View Services</button></Link>
                    </div>
                </div>
                <div className='col-lg-6 img-fluid'>
                    <img className='img-fluid' src={`https://massagecenter.pk/wp-content/uploads/2021/05/3.jpg`} alt="" />
                </div>
            </div>
            <div className='row py-5'>
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
        </div>
    );
};

export default Home;