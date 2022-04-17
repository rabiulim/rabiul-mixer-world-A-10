import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceInfo = () => {
    const { serviceID } = useParams();
    return (
        <div>
            <h2>welcome to detail: {serviceID}</h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'> CheckOut</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceInfo;