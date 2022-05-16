import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';



const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);


    let signout = e => {
        let check = window.confirm(' Are You Sure ?');
        if (check) {
            signOut(auth);
        }
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokelinejoinnn="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><CustomLink to='/'> Home </CustomLink></li>
                            <li><CustomLink to='/about'> About </CustomLink></li>
                            <li><CustomLink to='/appointment'> Appointment </CustomLink></li>
                            <li><CustomLink to='/reviews'> Reviews </CustomLink></li>
                            <li><CustomLink to='/contact'> Contact US </CustomLink></li>
                            {
                                user && <li><CustomLink to='/dashboard'> Dashboard </CustomLink></li>
                            }
                            {
                                user ?
                                    <li><button onClick={signout} > Sign Out </button></li>
                                    :
                                    <li><CustomLink to='/login'> Login </CustomLink></li>
                            }
                            {/* <li><CustomLink to='/login'> Login </CustomLink></li> */}
                            {/* <li tabIndex="0">
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li> */}
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a> */}
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><CustomLink to='/'> Home </CustomLink></li>
                        <li><CustomLink to='/about'> About </CustomLink></li>
                        <li><CustomLink to='/appointment'> Appointment </CustomLink></li>
                        <li><CustomLink to='/reviews'> Reviews </CustomLink></li>
                        <li><CustomLink to='/contact'> Contact Us </CustomLink></li>
                        {
                            user && <li><CustomLink to='/dashboard'> Dashboard </CustomLink></li>
                        }
                        {/* <li><CustomLink to='/login'> Login </CustomLink></li> */}
                        {
                            user ?
                                <li><button onClick={signout} > Sign Out </button></li>
                                :
                                <li><CustomLink to='/login'> Login </CustomLink></li>
                        }
                        {/* <li tabIndex="0">
                            <a>
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li> */}
                        {/* <li><a>Item 3</a></li> */}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar; 