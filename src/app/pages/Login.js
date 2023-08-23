import Form from 'react-bootstrap/Form'
import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../services/reducers/userSlice';

export default function Login() {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('username', username);
        if (username) {
            localStorage.setItem("loggedInUser", username);
            dispatch(login(username))
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
                {/* <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group> */}
                <Button type="submit" className='mb-5'>Login</Button>
            </Form>
        </Container>
    )
}
