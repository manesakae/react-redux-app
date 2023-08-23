import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ResponsiveNavbar() {
    const navigate = useNavigate()
    const username = localStorage.getItem("loggedInUser");
    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    }
    return (
        <Navbar bg="primary" collapseOnSelect expand="sm" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">React Demo Site</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/books">Books</Nav.Link>
                        <Nav.Link href="/bookpure">BookPure</Nav.Link>
                        <Nav.Link href="/posts">Posts</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: {username}
                        </Navbar.Text>&nbsp;
                    </Navbar.Collapse>
                    <Button variant="primary" onClick={handleLogout}>Logout</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default ResponsiveNavbar