import React from 'react';
import Navbar from "../components/dashboard/sidebar/Navbar";

function AdminDashboardHome() {
    return (
        <div>
            <Navbar/>
            <div className='home'>
                <h1>Home</h1>
            </div>
        </div>
    );
}

export default AdminDashboardHome;