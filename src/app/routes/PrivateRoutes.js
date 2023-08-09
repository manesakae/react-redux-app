import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    const { isLoggedIn } = useSelector(state => state.user)

    return (
        isLoggedIn ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes
