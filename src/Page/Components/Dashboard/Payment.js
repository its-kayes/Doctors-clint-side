import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from './../../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1e5sAjoeNet3APqkd0vZTXJCQ2ivpZcl4mXtMK0Uyq2tTQ11cVVJgkJMMAzbkKEgJs2MxHqHQCMKuhLyF7ze7400wy47I7MA');

const Payment = () => {
    let { id } = useParams();

    // fetch(`http://localhost:5000/payment/${id}`)
    //     .them(res => res.json())
    //     .then(data => console.log(data))

    let url = `http://localhost:5000/payment/${id}`;
    let { data: booked, isLoading } = useQuery(['booked', id], () => fetch(url, {
        headers: {
            // 'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    console.log(booked);

    if (isLoading) {
        return <Loading> </Loading>
    }


    return (
        <div>
            <p className='text-3xl font-bold text-center my-10'> Payment Details For Patient {booked?.patientName} </p>
            <div class="card w-96 bg-base-100 shadow-xl my-16">
                <div class="card-body">
                    <h2 class="card-title">{booked?.patientName}</h2>
                    <p>Your {booked?.slot} Appointment for {booked.service} on {booked?.date} </p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Pay ${booked?.cost}</button>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl my-16">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;