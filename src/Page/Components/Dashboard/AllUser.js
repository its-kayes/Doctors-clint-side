import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const AllUser = () => {
    // let [users, setUsers] = useState();

    // useEffect( () => {
    //     fetch('http://localhost:5000/user')
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    // }, []);

    let {data: users, isLoading} = useQuery('user', () => fetch('http://localhost:5000/user').then(res => res.json()))

    if(isLoading) {
        return <Loading> </Loading>
    }

    return (
        <div>
            <div>
                <h1 className='py-5 text-2xl'>All Users {users?.length} </h1>
            </div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email Address</th>
                            {/* <th>Service</th>
                            <th>Time</th>
                            <th>Date</th> */}
                        </tr>
                    </thead>
                    {
                        users.map((user, index) => <tbody key={user._id}>
                            
                            <tr>
                                <th> {index + 1} </th>
                                <td> {user.email} </td>
                                {/* <td> {appointment.service} </td>
                                <td> {appointment.slot} </td>
                                <td> {appointment.date} </td> */}
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default AllUser;