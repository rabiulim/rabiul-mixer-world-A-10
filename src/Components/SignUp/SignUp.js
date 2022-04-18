import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import OtherSignIn from '../OtherSignIn/OtherSignIn';
import './SignUp.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';



const Singup = () => {

    const [sendEmailVerification, sending, Verifyerror] = useSendEmailVerification(
        auth
    );

    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (Verifyerror) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (sending) {
        return <p>Sending...</p>;
    }


    const handleSignUp = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password, name);
        await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification();
        alert('Sent email');
        navigate('/home')

    }
    return (
        <div>
            <div className="container-from">
                <form onSubmit={handleSignUp}>
                    <h1 className='title'>Sing-up</h1>
                    <input type="text" name='name' placeholder='Your Name' /> <br />
                    <input type="email" name='email' placeholder='Your Email' required /> <br />
                    <input type="password" name='password' placeholder='Your Password' required /> <br />
                    <button type="submit">Sing-up</button>
                    <p className='allready'>Already have an account? <Link className='text-white text-decoration-none' to="/login">Plz Login</Link> </p>
                    <ToastContainer />
                    <OtherSignIn></OtherSignIn>
                </form>
            </div>
        </div >
    );
};

export default Singup;