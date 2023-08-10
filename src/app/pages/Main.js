import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import Container from 'react-bootstrap/Container';

export default function Main() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <Container className="mt-5">
                <Outlet />
            </Container>
            <Footer />
        </div>
    )
}
