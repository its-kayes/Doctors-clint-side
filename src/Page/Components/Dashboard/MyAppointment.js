import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyAppointment = () => {
    let [appointments, setAppointments] = useState([]);
    let navigate = useNavigate();
    let [user] = useAuthState(auth)
    console.log(user.email);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?email=${user.email}`, {
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
                            <th>Time</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    {
                        appointments.map((appointment, index) => <tbody>
                            <tr>
                                <th> {index + 1} </th>
                                <td> {appointment.patientName} </td>
                                <td> {appointment.service} </td>
                                <td> {appointment.slot} </td>
                                <td> {appointment.date} </td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>

        </div>
    );
};

export default MyAppointment;