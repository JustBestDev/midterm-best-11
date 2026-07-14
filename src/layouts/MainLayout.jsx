import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../components/NavBar'

function MainLayout() {
    return (
        <div className='bg-blue-50'>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default MainLayout