import React from "react";
import Navbar from "../layouts/navbar/Navbar";
import Sidebar from "../layouts/sidebar/Sidebar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="font-inter min-h-screen">
            <ToastContainer position="bottom-right" autoClose={2000} />
            <Navbar />

            <div className="flex max-w-[1777px] mx-auto px-4 pt-4">
                {/* Sidebar */}
                <div className="hidden md:block ">
                    <div className="sticky top-0 h-screen overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        <Sidebar />
                    </div>
                </div>

                {/* Main content */}
                <div className="flex-1 overflow-y-auto max-h-[calc(100vh-64px)] pl-0 md:pl-6 [&::-webkit-scrollbar]:hidden">
                    <Outlet />
                </div>
            </div>
        </div>

    );
};

export default MainLayout;
