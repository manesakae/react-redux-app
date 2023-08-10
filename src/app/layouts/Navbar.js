import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function ResponsiveNavbar() {
    const user = useSelector(state => state.user)

    return (
        // <nav>
        //     <ul>
        //         <li><Link to="/">Home</Link></li>
        //         <li><Link to="/bookpure">BookPure</Link></li>
        //         <li><Link to="/posts">Posts</Link></li>
        //         <li><Link to="/books">Books</Link></li>
        //         <li><Link to="/about">About</Link></li>
        //     </ul>
        // </nav>
        <Navbar bg="primary" collapseOnSelect expand="sm">
            <Container>
                <Navbar.Brand href="/">React Demo Site</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home | </Nav.Link>
                        <Nav.Link href="/books">Books | </Nav.Link>
                        <Nav.Link href="/bookpure">BookPure | </Nav.Link>
                        <Nav.Link href="/posts">Posts | </Nav.Link>
                        <Nav.Link href="/about">About | </Nav.Link>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Signed in as: {user.name}
                            </Navbar.Text>&nbsp;

                        </Navbar.Collapse>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default ResponsiveNavbar