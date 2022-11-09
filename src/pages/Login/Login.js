import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsGoogle } from 'react-icons/bs';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../customContexts/AuthProvider';
import './Login.css';
const Login = () => {

    const [error, setError] = useState(null);
    const { user, providerLogin, userLogin } = useContext(AuthContext)
    const location = useLocation()
    const from = location?.state?.form?.pathname || '/';
    const navigate = useNavigate()
    if (user && user.uid) {
        return <Navigate to="/"></Navigate>
    }
    const handleGoogleSignin = () => {
        const provider = new GoogleAuthProvider();
        providerLogin(provider)
            .then(result => {
                console.log(result);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }
    const login = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        userLogin(email, password)
            .then(result => {
                console.log(result);
                event.target.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorText = error.code;
                console.log(error.code);
                if ('auth/user-not-found' === errorText) {
                    setError('No user found');
                }
                else if ('auth/wrong-password' === errorText) {
                    setError('Wrong password');
                }
            })
    }

    return (
        <div className='container mw-50 form-section'>
            <Form className='form mw-50 h-100 mx-auto shadow' onSubmit={login} >
                <h2 className='text-center pb-3'>Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="password" required />
                </Form.Group>
                <div>
                    {error && <p className='text-danger'>{error}*</p>}
                </div>
                <Button className='btn w-100 bg-black border-dark' type="submit">
                    Login
                </Button>
                <p className='pt-2'>Don't have an account?<Link className='ms-1' to='/signup' >Signup</Link> </p>
                <Button className='my-4 w-100 d-flex justify-content-center align-items-center' onClick={handleGoogleSignin}>
                    <BsGoogle className='' />
                    <span className='h-full my-auto ms-2'>Continue With Google</span></Button>
            </Form>
        </div>
    );
};

export default Login;