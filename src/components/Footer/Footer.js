import { CDBBox, CDBBtn, CDBFooter, CDBFooterLink, CDBIcon } from 'cdbreact';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../musclemaster-logo.png';
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
            <CDBFooter className="shadow" >
                <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
                    <CDBBox display="flex" justifyContent="between" className="flex-wrap">
                        <CDBBox alignSelf="center">
                            <a href="/" className="d-flex align-items-center p-0 text-dark">
                                <img alt="logo" src={logo} width="250px" />

                            </a>
                            <CDBBox className="mt-5" display="flex">
                                <p>A haven for personal healing, growth, and discovery.</p>
                            </CDBBox>
                        </CDBBox>
                        <CDBBox>
                            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                                Pages
                            </p>
                            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
                                <CDBFooterLink  ><Link to='/'>Home</Link></CDBFooterLink>
                                <CDBFooterLink  ><Link to='/services'>Services</Link></CDBFooterLink>
                                <CDBFooterLink  ><Link to='/myreviews'>My Reviews</Link></CDBFooterLink>
                                <CDBFooterLink  ><Link to='/addservice'>Add Service</Link></CDBFooterLink>
                                <CDBFooterLink  ><Link to='/blogs'>Blogs</Link></CDBFooterLink>
                                <CDBFooterLink  ><Link to='/login'>Login</Link></CDBFooterLink>
                                <CDBFooterLink  ><Link to='/signup'>Signup</Link></CDBFooterLink>
                            </CDBBox>
                        </CDBBox>
                        <CDBBox>
                            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                                Top Services
                            </p>
                            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
                                {services.map(service => <CDBFooterLink  key={service._id}><Link to={`/services/${service._id}`}>{service.serviceName}</Link></CDBFooterLink>)}

                            </CDBBox>
                        </CDBBox>
                        <CDBBox>
                            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                                Social
                            </p>
                            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', gap: '5px' }}>
                                <CDBBtn flat color="dark" className="p-2">
                                    <CDBIcon fab icon="facebook-f" />
                                </CDBBtn>
                                <CDBBtn flat color="dark" className="p-2">
                                    <CDBIcon fab icon="twitter" />
                                </CDBBtn>
                                <CDBBtn flat color="dark" className="p-2">
                                    <CDBIcon fab icon="instagram" />
                                </CDBBtn>
                            </CDBBox>
                        </CDBBox>
                    </CDBBox>
                    <small className="text-center mt-5">&copy; MuscleMaster, 2022. All rights reserved.</small>
                </CDBBox>
            </CDBFooter>
        </div>
    );
};

export default Footer;