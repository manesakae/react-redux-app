import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PublicRoutes = () => {
    const isLoggedIn = localStorage.getItem('loggedInUser') ? true : false;

    return (
        !isLoggedIn ? <Outlet /> : <Navigate to="/" />
    )
}

export default PublicRoutes