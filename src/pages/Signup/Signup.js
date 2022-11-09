import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Signup = () => {
    return (
        <div className='container mw-50 py-4 form-section'>
            <Form className='form mw-50 h-100 mx-auto' >
                <h2 className='text-center pb-3'>Signup</h2>

                <Form.Group className="mb-3" controlId="formBasicname">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

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
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control type="text" placeholder="Photo url" />
                </Form.Group>
                <Button className='btn w-100 bg-black border-dark'  type="submit">
                    Signup
                </Button>
            </Form>
        </div>
    );
};

export default Signup;