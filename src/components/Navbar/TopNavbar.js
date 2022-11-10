import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../customContexts/AuthProvider';
import logo from '../../musclemaster-logo.png';
import './TopNavbar.css';
const TopNavbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const signOut = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <Navbar className='navbar'  expand="lg" style={{ height: '58px' }}>
                <Container fluid className='container' style={{ height: '58px' }}>
                    <Navbar.Brand href="#"><img style={{ width: '250px', height: '58px' }} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className=''>
                        <Nav
                            className="ms-auto my-auto h6  my-lg-0 font-weight-bold flex align-items-center "
                            style={{ minHeight: '100px', color: 'white' }}
                            navbarScroll
                        >

                            <Link to='/' className='nav-link'>Home</Link>
                            <Link to='/services' className='nav-link'>Services</Link>
                            <Link to='/myreviews' className='nav-link'>My Reviews</Link>
                            <Link to='/addservice' className='nav-link'>Add Service</Link>
                            <Link to='/blogs' className='nav-link'>Blogs</Link>
                            {
                                user ? <>
                                    <Link className='nav-link' onClick={signOut}>Logout</Link>
                                    <img src={user.photoURL} alt="profile" className='profile-img' />
                                </>
                                    :
                                    <> <Link to='/login' className='nav-link'>Login</Link>
                                        <Link to='/signup' className='nav-link'>Signup</Link></>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default TopNavbar;