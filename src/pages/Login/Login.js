import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'
const Login = () => {
    return (
        <div className='container mw-50 py-4 form-section'>
            <Form className='form mw-50 h-100 mx-auto' >
                <h2 className='text-center pb-3'>Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className='btn w-100 bg-black border-dark'  type="submit">
                   Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;