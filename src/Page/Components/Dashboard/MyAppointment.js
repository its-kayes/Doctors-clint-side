import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyAppointment = () => {
    let [appointments, setAppointments] = useState([]);

    let [user] = useAuthState(auth)
    console.log(user.email);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?email=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data))
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
                        </tbody> )
                    }
                </table>
            </div>

        </div>
    );
};

export default MyAppointment;