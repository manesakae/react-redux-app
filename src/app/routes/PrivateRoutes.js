import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    const isLoggedIn = localStorage.getItem('loggedInUser') ? true : false;

    return (
        isLoggedIn ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes
