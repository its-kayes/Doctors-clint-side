import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../../hook/useAdmin';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Dashboard = () => {
    let [user] = useAuthState(auth);
    let [admin] =useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                {/* <!-- Page content here --> */}
                {/* <h1 className='text-5xl text-cyan-500 font-extrabold'> Dashboard </h1> */}
                <Outlet>  </Outlet>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appointments</Link></li>
                    <li><Link to='review'>My Review</Link></li>
                    <li><Link to='history'>My History</Link></li>
                    {
                        admin && <li><Link to='users'>All User</Link></li>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;