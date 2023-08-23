import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import checkLogin from '../utils/checkLogin'

const PublicRoutes = () => {
    const isLoggedIn = checkLogin();

    return (
        !isLoggedIn ? <Outlet /> : <Navigate to="/" />
    )
}

export default PublicRoutes