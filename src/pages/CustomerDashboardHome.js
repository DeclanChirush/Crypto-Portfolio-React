import React from "react";
import Navbar from "../components/dashboard/sidebar/Navbar";
import Dashboard from "../components/dashboard/admin/Dashboard";

function CustomerDashboardHome() {
    return (
        <div>
            <Navbar/>
            <div>
                <Dashboard/>
            </div>
        </div>
    );
}

export default CustomerDashboardHome;