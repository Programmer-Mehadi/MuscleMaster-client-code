import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsGoogle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
    return (
        <div className='container mw-50 form-section'>
            <Form className='form mw-50 h-100 mx-auto' >
                <h2 className='text-center pb-3'>Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" required/>
                </Form.Group>
                <Button className='btn w-100 bg-black border-dark'  type="submit">
                   Login
                </Button>
                <p className='pt-2'>Don't have an account?<Link className='ms-1' to='/signup' >Signup</Link> </p>
                <Button className='my-4 w-100 d-flex justify-content-center align-items-center'>
                    <BsGoogle className='' />
                    <span className='h-full my-auto ms-2'>Continue With Google</span></Button>   
            </Form>
        </div>
    );
};

export default Login;