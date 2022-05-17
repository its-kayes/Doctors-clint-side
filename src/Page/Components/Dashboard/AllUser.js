import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';

const AllUser = () => {
    // let [users, setUsers] = useState();

    // useEffect( () => {
    //     fetch('http://localhost:5000/user')
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    // }, []);

    let { data: users, isLoading, refetch } = useQuery('user', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            // 'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()))

    let makeAdmin = (email) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => {
                if(res.status === 403) {
                    toast.error(" Can't Added as Admin ")
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully Added as an Admin`);
                }
            })
    }

    if (isLoading) {
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
                            <th>Make Role</th>
                            <th>Delete User</th>
                            {/* <th>Date</th> */}
                        </tr>
                    </thead>
                    {
                        users.map((user, index) => <tbody key={user._id}>

                            <tr>
                                <th> {index + 1} </th>
                                <td> {user.email} </td>
                                <td>
                                    {
                                        user.role !== 'admin' && <button onClick={() => makeAdmin(user.email)} class="btn btn-sm">Make Admin</button>
                                    }
                                </td>
                                <td> <button class="btn btn-sm">Remove User</button>
                                </td>
                                {/* <td> {appointment.date} </td> */}
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default AllUser;