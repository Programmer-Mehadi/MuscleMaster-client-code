import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import { BsGoogle } from 'react-icons/bs';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../customContexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import './Login.css';
const Login = () => {
    useTitle('Login');
    const [error, setError] = useState(null);
    const [thisLoading,setThisLoading]=useState(false)
    const { user, providerLogin, userLogin, loading } = useContext(AuthContext)
    const location = useLocation()
    const from = location?.state?.form?.pathname || '/';
    const navigate = useNavigate()
    if (user && user.uid) {
        return <Navigate to="/"></Navigate>
    }
    const handleGoogleSignin = () => {
        setThisLoading(true)
        const provider = new GoogleAuthProvider();
        providerLogin(provider)
            .then(result => {
                console.log(result);
                const user = result.user;
                const currentUser = {
                    email: user.email,
                    uid: user.uid
                }
                fetch('https://musclemaster-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("MuscleMaster-token", data.token);
                        setThisLoading(false)
                        navigate(from, { replace: true });
                    })

            })
            .catch(error => {
                console.log(error);
                setThisLoading(false)
            })
    }
    const login = (event) => {
        setThisLoading(true)
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        userLogin(email, password)
            .then(result => {
                event.target.reset();
                const user = result.user;
                const currentUser = {
                    email: user.email,
                    uid: user.uid
                }
                fetch('https://musclemaster-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("MuscleMaster-token", data.token);
                        setThisLoading(false)
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                setThisLoading(false)
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
            {
                thisLoading && <div className="d-flex justify-content-center flex-column align-items-center mx-auto"> <Spinner animation="border" />
                    <div>loading....</div> </div>
            }
            <Form className='form mw-50 mx-auto shadow' onSubmit={login} >
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