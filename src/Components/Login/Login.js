import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;



    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {

        errorElement =
            <p className='text-danger'>Error: {error?.message} </p>

    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateSignUp = event => {
        navigate("/signup")
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-50 mx-auto d-block mb-3' variant="primary" type="submit">
                    LogIn
                </Button>
            </Form>
            {errorElement}
            <p className='mx-auto w-75'>New to Genius Car? <Link to="/signup" className='text-danger pe-auto text-decoration-none' onClick={navigateSignUp}>Please Register</Link> </p>
            <p className='mx-auto w-75'>Forgot Password? <Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</Link> </p>
        </div>
    );
};

export default Login;