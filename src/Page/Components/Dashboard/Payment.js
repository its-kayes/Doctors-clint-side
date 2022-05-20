import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    let {id} = useParams();
    return (
        <div>
            <p> this is payment: {id} </p>
        </div>
    );
};

export default Payment;