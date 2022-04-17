import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price, id
    } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p className='fs-4'>Service-fee: {price}</p>
            <p className='fs-5'><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-danger text-white fs-5'>Hire Me</button>

        </div>
    );
};

export default Service;