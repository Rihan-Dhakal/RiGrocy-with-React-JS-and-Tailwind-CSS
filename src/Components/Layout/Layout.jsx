import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />

        </div>
    )
}
