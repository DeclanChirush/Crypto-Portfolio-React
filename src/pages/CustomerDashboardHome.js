import React from "react";
import Navbar from "../components/dashboard/sidebar/Navbar";
import Dashboard from "../components/dashboard/admin/Dashboard";
import CommonCheckAuth from "../services/CommonAuthCheck";

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

export default CommonCheckAuth(CustomerDashboardHome);