import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../musclemaster-logo.png';
import './TopNavbar.css';
const TopNavbar = () => {
    return (
        <div>
            <Navbar className='navbar' bg="light" expand="lg">
                <Container fluid className='container'>
                    <Navbar.Brand href="#"><img style={{width:'250px'}} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className=''>
                        <Nav
                            className="ms-auto h5 my-2 my-lg-0 font-weight-bold"
                            style={{ minHeight: '100px',color:'#4D331F' }}
                            navbarScroll
                        >
                            
                            <Link to='/' className='nav-link'>Home</Link>
                            <Link to='/services' className='nav-link'>Services</Link>
                            <Link to='/myreviews' className='nav-link'>My Reviews</Link>
                            <Link to='/addservice' className='nav-link'>Add Service</Link>
                            <Link to='/blogs' className='nav-link'>Blogs</Link>
                            <Link to='/login' className='nav-link'>Login</Link>
                            <Link to='/signup' className='nav-link'>Signup</Link>
                             
                        </Nav>                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default TopNavbar;