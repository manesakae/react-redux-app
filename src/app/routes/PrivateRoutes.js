import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import checkLogin from '../utils/checkLogin'

const PrivateRoutes = () => {
    const isLoggedIn = checkLogin()

    return (
        isLoggedIn ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes
