import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceInfo = (props) => {
    console.log(props)
    const { serviceID } = useParams();
    return (
        <div>
            <h2 className='text-center'>welcome to Travel Spot: {serviceID}</h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-danger w-25 fs-5 fw-bolder mt-5'> CheckOut</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceInfo;