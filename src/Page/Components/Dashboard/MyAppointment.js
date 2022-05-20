import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyAppointment = () => {
    let [appointments, setAppointments] = useState([]);
    let navigate = useNavigate();
    let [user] = useAuthState(auth)
    console.log(user.email);

    useEffect(() => {
        if (user) {
            fetch(`https://murmuring-atoll-87463.herokuapp.com/booking?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 404 || res.status === 401) {
                        // let errorCode = window.confirm('Invalid Login Token');
                        // if(errorCode) {
                        //     signOut(auth);
                        //     localStorage.removeItem('accessToken');
                        //     navigate('/')
                        // }
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    console.log('res', res);
                    return res.json()
                })
                .then(data => {
                    setAppointments(data)
                })
        }

    }, [user])

    console.log(appointments)

    return (
        <div>
            <div>
                <h1 className='py-5 text-2xl'>My Appointment {appointments.length} </h1>
            </div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Service Cost</th>
                            <th>Time</th>
                            <th>Date</th>
                            <th> Payment </th>
                        </tr>
                    </thead>
                    {
                        appointments.map((appointment, index) => <tbody>
                            <tr>
                                <th> {index + 1} </th>
                                <td> {appointment.patientName} </td>
                                <td> {appointment.service} </td>
                                <td> {appointment.cost} </td>
                                <td> {appointment.slot} </td>
                                <td> {appointment.date} </td>
                                <td> {appointment.cost && <Link to={`/dashboard/payment/${appointment._id}`} > <button className='btn btn-xs bg-green-700'> Pay </button> </Link>} </td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>

        </div>
    );
};

export default MyAppointment;