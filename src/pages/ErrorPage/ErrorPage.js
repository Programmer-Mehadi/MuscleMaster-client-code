import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../404.jpg'
import useTitle from '../../hooks/useTitle';
const ErrorPage = () => {
    useTitle('Error')
    return (
        <div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <img style={{ maxWidth: '700px' }} className='w-75  mx-auto' src={logo} alt="" />
          
                <Link to='/'><button className="btn btn-primary">Home</button></Link>
              
            </div>
            
            
        </div>
    );
};

export default ErrorPage;