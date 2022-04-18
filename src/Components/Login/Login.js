import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import OtherSignIn from '../OtherSignIn/OtherSignIn'
import Loading from '../Loading/Loading';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p style={{ 'color': 'salmon' }} className='fs-5 fw-bold '>Error: {error?.message} </p>
    }
    else {
        errorElement = "";
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
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('plz enter your email')
        }
    }

    return (
        <div className='container w-50 mx-auto login-container'>
            <h2 className='text-info text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-50 mx-auto d-block mb-3 text-white fs-4 fw-bold' variant="info" type="submit">
                    LogIn
                </Button>
            </Form>
            {errorElement}
            <p className='mx-auto w-75 text-white'>New to Rabiul Mixer World? <Link to="/signup" className='text-white fw-bolder pe-auto text-decoration-none' onClick={navigateSignUp}>Please Register</Link> </p>
            <p className='mx-auto w-75 fw-bold text-white'>Forgot Password? <button className='text-white fs-5 pe-5 pb-3 btn btn-link pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <ToastContainer></ToastContainer>
            <OtherSignIn></OtherSignIn>
        </div>
    );
};

export default Login;