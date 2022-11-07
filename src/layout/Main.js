import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavbar from '../components/Navbar/TopNavbar';


const Main = () => {
    return (
        <div>
            <TopNavbar></TopNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;