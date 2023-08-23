import Form from 'react-bootstrap/Form'
import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        if (username) {
            localStorage.setItem("loggedInUser", username);
            navigate('/')
        }
    }

    return (
        <Container className="mt-5">
            <h3>Login Page</h3>
            <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Button type="submit" className='mb-5'>Login</Button>
            </Form>
        </Container>
    )
}
