import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsGoogle } from "react-icons/bs";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../customContexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
const Signup = () => {
    useTitle('Signup')
    const [error, setError] = useState(null);
    const [authError, setAuthError] = useState(null);
    const { user, providerLogin, createNewUser, updateUserInfo, userLogin, logOut } = useContext(AuthContext)
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
                const user = result.user;
                const currentUser = {
                    email: user.email,
                    uid: user.uid
                }
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("MuscleMaster-token", data.token);
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }
    const createUser = (event) => {
        event.preventDefault();
        setError(null);
        setAuthError(null);
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmpassword.value;
        const fullname = event.target.fullname.value;
        const photoURL = event.target.file.value;
        if (password.length >= 6) {
            if (password === confirmPassword) {
                createNewUser(email, password)
                    .then(result => {
                        console.log(result);
                        const profile = {
                            displayName: fullname,
                            photoURL: photoURL
                        }
                        updateUserInfo(profile)
                            .then(result => {
                                console.log(result);
                            })
                            .catch(error => {
                                console.log(error);
                            })
                        event.target.reset();
                        logOut()
                            .then(result => {
                                userLogin(email, password)
                                    .then(result => {
                                        const user = result.user;
                                        const currentUser = {
                                            email: user.email,
                                            uid: user.uid
                                        }
                                        fetch('http://localhost:5000/jwt', {
                                            method: 'POST',
                                            headers: {
                                                'content-type': 'application/json'
                                            },
                                            body: JSON.stringify(currentUser)
                                        })
                                            .then(res => res.json())
                                            .then(data => {
                                                localStorage.setItem("MuscleMaster-token", data.token);
                                                navigate(from, { replace: true });
                                            })
                                    })
                                    .catch(error => {
                                        console.log(error);
                                    })
                            })
                            .catch(error => {
                                console.log(error);
                            });

                    })
                    .catch(error => {
                        console.log(error);
                        const erro = error.code;
                        console.log(erro);
                        if (erro === 'auth/email-already-in-use') {
                            setAuthError('Email already in use')
                        }
                    })
            }
            else {
                setError('Password and confirm password shold be same');
            }
        }
        else {
            setError('Password should be at least 6 characters');
        }
    }
    return (
        <div className='container mw-50 py-4 form-section'>
            <Form className='form mw-50 h-100 mx-auto shadow' onSubmit={createUser}>
                <h2 className='text-center pb-3'>Signup</h2>

                <Form.Group className="mb-3" controlId="formBasicname">
                    <Form.Label>Full Name</Form.Label>
                    <input className='form-control' name='fullname' type="text" placeholder="name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="email" required />

                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name="confirmpassword" type="password" placeholder="confirm password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control name="file" type="text" placeholder="photo url" required />
                </Form.Group>
                {
                    error && <p className='py-2 text-danger'>{error}*</p>
                }
                {
                    authError && <p className='py-2 text-danger'>{authError}*</p>
                }
                <Button className='btn w-100 bg-black border-dark' type="submit">
                    Signup
                </Button>
                <p className='pt-2'>Already have an account?<Link className='ms-1' to='/login' >Login</Link> </p>
                <Button className='my-4 w-100 d-flex justify-content-center align-items-center' onClick={handleGoogleSignin}>
                    <BsGoogle className='' />
                    <span className='h-full my-auto ms-2'>Continue With Google</span></Button>
            </Form>

        </div>
    );
};

export default Signup;