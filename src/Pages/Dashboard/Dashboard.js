import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mx-4">
                    <h3 className='text-2xl text-accent font-bold'>Welcome to your Dashboard</h3>
                    <Outlet />

                </div>

                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 bg-accent text-white">

                        <li><Link to="/dashboard">My Orders</Link></li>
                        {!admin && <li><Link to="/dashboard/review">Add a Review</Link></li>}

                        {admin && <>
                            <li><Link to="/dashboard/users">All Users</Link></li>
                            <li><Link to="/dashboard/addProduct">Add Product</Link></li>
                            <li><Link to="/dashboard/manageProduct">Manage Product</Link></li>
                        </>}
                        <li><Link to="/dashboard/profile">My Profile</Link></li>
                    </ul>

                </div>
            </div>
    );
};

export default Dashboard;