import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const TopNavbar = () => {
    return (
        <div>
            <Navbar  bg="light" expand="lg">
                <Container fluid className='container'>
                    <Navbar.Brand href="#">MuscleMaster</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className=''>
                        <Nav
                            className="ms-auto  my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            
                            <Link to='/' className='nav-link'>Home</Link>
                            <Link to='/services' className='nav-link'>Services</Link>
                            <Link to='/myreviews' className='nav-link'>My Reviews</Link>
                            <Link to='/addservices' className='nav-link'>Add Services</Link>
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