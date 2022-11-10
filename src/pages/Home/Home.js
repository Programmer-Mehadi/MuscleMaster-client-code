import React from 'react';
import { Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import './Home.css';
const Home = () => {
    const services = useLoaderData()

    return (
        <div className='home-container container py-5'>
            <div className='row '>
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4'>
                    <h2>Massage Is Therapy</h2>
                    <p>Whether you're looking for a relaxing massage to rejuvenate your spirit or need a therapeutic massage to relieve muscle pain, our licensed Massage Therapists will customize your massage to your individual needs!</p>
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
            <div className='d-flex justify-content-center'>
                <Link to='/services'><button className='btn btn-primary  border-0 w-auto'>See All</button></Link>
            </div>
            <div className='row py-5 video'>
                <div className='col-lg-6 mb-4'>
                    <h2>Feel the difference of feelings good!</h2>
                    <p className="mt-2">The benefits of receiving massages are cumulative and much more effective when customized with a regular treatment plan. The more often and consistently you receive a massage, the better your body can feel. Join our Benefits Program; a cost-effective way to integrate regular, custom massage therapy and skincare services into your health regimen. Become a Member and save up to 25% on services!

                    </p>
                </div>
                <div className='col-lg-6'>
                    <video width="100%" height="240" controls>
                        <source src="massage-intro.mp4" type="video/mp4" />
                    </video>
                </div>

            </div>
            <div className='why py-5 text-white rounded shadow'>
                <h2 className='text-center'>Why MuscleMaster Massage?</h2>
                <p className='px-5 py-4'>MuscleMaster Massage is a unique wellness center offering highly customized therapeutic massage and skincare services that are affordable and convenient. We are the leading provider of holistic health and wellness services, catering to busy, active lifestyles in a peaceful setting. MuscleMaster Massage is dedicated to the idea that massage should be an affordable part of an overall healthy lifestyle and wellness plan.</p>
                <div className="d-flex justify-content-center">
                   <Link to='/services'> <button className="btn btn-primary">Get Start</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;