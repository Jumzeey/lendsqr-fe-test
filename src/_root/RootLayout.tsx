import React from 'react';
import { Outlet } from 'react-router-dom'
import NavBar from '../components/shared/Navbar'
import SideBar from '../components/shared/SideBar';
import './RootLayer.scss'

const RootLayout: React.FC = () => {
    return (
        <>
            <div className="root-layout">
                <NavBar />
                <main className="main-content">
                    <SideBar />
                    <div className='outlet'>
                        <Outlet/>
                    </div>
                </main>
            </div>
        </>
    )
}

export default RootLayout