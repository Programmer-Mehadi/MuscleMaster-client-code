import React, { useEffect, useState } from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                const sortData = data.sort((a, b) => b.rating - a.rating).slice(0, 5);
                setServices(sortData);
               
            })
    }, [])

    return (
        <div className='footer'>
            <footer className=" text-white">
                <div className="container p-4">

                    <section className="">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Pages</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <Link to='/'>Home</Link>
                                    </li>
                                    <li>
                                        <Link to='/services'>Services</Link>
                                    </li>
                                    <li>
                                        <Link to='/blogs'>Blogs</Link>
                                    </li>
                                    <li>
                                        <Link to='/login'>Login</Link>
                                    </li>
                                    <li>
                                        <Link to='/signup'>Signup</Link>
                                    </li>

                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Top Services</h5>

                                <ul className="list-unstyled mb-0">
                                    {services.map(service => <li key={service._id}><Link to={`/services/${service._id}`}>{service.serviceName}</Link></li>)}
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase"></h5>
                                <form action="">
                                    <div className="row d-flex flex-column justify-content-center">
                                        <div className="">
                                            <p className="">
                                                <strong>Sign up for our newsletter</strong>
                                            </p>
                                        </div>
                                        <div className="">
                                            <div className="form-outline form-white ">
                                                <input type="email" id="form5Example21" className="form-control" />
                                                <label className="form-label" for="form5Example21">Email address</label>
                                            </div>
                                        </div>
                                        <div className="">

                                            <button type="submit" className="btn btn-outline-light bg-primary mb-2">
                                                Subscribe
                                            </button>
                                        </div>
                                        <div className='d-flex social'>
                                            <a href=""><BsFacebook /></a>
                                            <a href=""><BsTwitter /></a>
                                            <a href=""><BsLinkedin /></a>
                                            <a href=""><BsInstagram /></a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2022 Copyright 
                    <Link className="text-white" to='/'> MuscleMaster</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;