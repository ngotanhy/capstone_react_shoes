import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../componets/Footer/Footer'
import Header from '../componets/Header/Header'


export default function HomeTemplate() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
