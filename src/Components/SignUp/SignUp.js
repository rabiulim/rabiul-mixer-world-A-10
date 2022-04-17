import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'


const Singup = () => {
    return (
        <div>
            <div className="container-from">
                <form>
                    <h1 className='title'>Sing-up</h1>
                    <input type="text" placeholder='Your Name' /> <br />
                    <input type="email" placeholder='Your Email' /> <br />
                    <input type="password" placeholder='Your Password' /> <br />
                    <button type="submit">Sing-up</button>
                    <p className='allready'>Already have an account? <Link className='text-white text-decoration-none' to="/login">Plz Login</Link> </p>
                    <p className='or'>Or login with</p>
                    <button>   Google  </button> <br />
                    <button>  Github </button>
                </form>
            </div>
        </div >
    );
};

export default Singup;