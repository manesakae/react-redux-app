import Form from 'react-bootstrap/Form'
import React, { useState } from 'react'
import { Alert, Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        if (username) {
            setShowAlert(false);
            localStorage.setItem("loggedInUser", username);
            navigate('/')
        } else {
            setShowAlert(true);
        }
    }

    return (
        <Container className="mt-5">
            <h3>Login Page</h3>
            <Row>
                <Col xs={12} md={6}>
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formGroupUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => {
                                setUsername(e.target.value)
                                showAlert && setShowAlert(false);
                            }} />
                            {showAlert && <Alert variant="warning" className='mt-2 pt-2 pb-2'>
                                Username required!
                            </Alert>}
                        </Form.Group>
                        <Button type="submit" className='mb-5'>Login</Button>
                    </Form>
                </Col>
            </Row>

        </Container>
    )
}
