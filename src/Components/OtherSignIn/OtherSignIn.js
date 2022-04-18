import React from 'react';
import google from '../../images/social-icon/google.png'
import fasebook from '../../images/social-icon/fasebook.png'
import github from '../../images/social-icon/github.png'

import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';



const OtherSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, GitUser, GitLoading, GitError] = useSignInWithGithub(auth);
    const [signInWithFacebook, userFb, loadingFb, errorFb] = useSignInWithFacebook(auth);

    const navigate = useNavigate();

    let errorElement;
    if (loading || GitLoading || loadingFb) {
        return <Loading></Loading>
    }

    if (error || GitError || errorFb) {

        errorElement =
            <p className='text-danger'>Error: {error?.message} {GitError?.message} {errorFb?.message}</p>

    }

    if (user || userFb || GitUser) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-white w-50'></div>
                <p className='mt-2 px-2 fs-4 text-white'>or</p>
                <div style={{ height: '1px' }} className='bg-white w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info d-block mx-auto w-50 my-3'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button onClick={() => signInWithFacebook()} className='btn btn-info d-block mx-auto w-50 my-3'>
                    <img style={{ width: '30px' }} src={fasebook} alt="" />
                    <span className='px-2'>Fasebook Sign In </span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info d-block mx-auto w-50 my-3'>
                    <img style={{ width: '60px' }} src={github} alt="" />
                    <span className='px-2'>GitHub Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default OtherSignIn;