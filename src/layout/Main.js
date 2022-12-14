import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import TopNavbar from '../components/Navbar/TopNavbar';


const Main = () => {
    return (
        <div>
            <TopNavbar></TopNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;