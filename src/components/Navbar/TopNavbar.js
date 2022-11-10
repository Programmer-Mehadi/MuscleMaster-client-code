import React, { useContext } from 'react';
import { AuthContext } from '../../customContexts/AuthProvider';
import './TopNavbar.css';
import logo from '../../musclemaster-logo.png';
import { Link } from 'react-router-dom';
const TopNavbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const signOut = () => {
        logOut()
            .then(result => {
                // console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="navbar-section shadow">
            <nav className="navbar navbar-expand-lg navbar-light container">
                <Link to='/'> <img src={logo} style={{ minWidth: '20%', height: '58px' }} alt="" /></Link>
                <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0  text-dark">
                        <Link to='/' className='nav-link'>Home</Link>
                        <Link to='/services' className='nav-link'>Services</Link>

                        {
                            user ? <>
                                <Link to='/myreviews' className='nav-link'>My Reviews</Link>
                                <Link to='/addservice' className='nav-link'>Add Service</Link>
                                <Link to='/blogs' className='nav-link'>Blogs</Link>
                                <Link className='nav-link' onClick={signOut}>Logout</Link>
                                <img src={user.photoURL} alt="profile" className='profile-img' />
                            </>
                                :
                                <>    <Link to='/blogs' className='nav-link'>Blogs</Link> <Link to='/login' className='nav-link'>Login</Link>
                                    <Link to='/signup' className='nav-link'>Signup</Link></>
                        }
                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default TopNavbar;