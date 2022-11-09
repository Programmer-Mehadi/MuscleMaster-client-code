import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsGoogle } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Signup = () => {

    const location = useLocation();
    const from = location?.state?.form?.pathname || '/';
    const navigate = useNavigate();
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
    return (
        <div className='container mw-50 py-4 form-section'>
            <Form className='form mw-50 h-100 mx-auto' >
                <h2 className='text-center pb-3'>Signup</h2>

                <Form.Group className="mb-3" controlId="formBasicname">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control type="text" placeholder="photo url" required />
                </Form.Group>
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