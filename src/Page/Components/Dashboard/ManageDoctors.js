import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';

const ManageDoctors = () => {

    let { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctors', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading> </Loading>
    }

    let doctorDelete = email => {

        fetch(`http://localhost:5000/doctors/${email}`,{
            method: 'DELETE', 
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount) {
                toast.success(' Doctor deleted ')
                refetch();
            }

        })

    }

    return (
        <div>
            <h1 className='text-5xl'> Manage Doctors </h1>
            <h1> Total {doctors.length} Doctors are available </h1>

            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th> </th>
                                <th> Avatar </th>
                                <th>Name</th>
                                <th> Specialist </th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                doctors.map((doctor, index) =>
                                    <tr>
                                        <th>{index + 1}</th>
                                        <th> <div class="avatar">
                                            <div class="w-24 rounded-full">
                                                <img src={doctor.image} />
                                            </div>
                                        </div> </th>
                                        <td> {doctor.name} </td>
                                        <td>{doctor.specialist}</td>
                                        <td><button onClick={()=> doctorDelete(doctor.email)} class="btn btn-sm bg-error">Delete</button></td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageDoctors;