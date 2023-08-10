import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
function About() {
    return (
        <Container className='mt-3'>
            <h1>About</h1>
            <p>
                Donec sit amet augue at enim sollicitudin porta. Praesent finibus ex
                velit, quis faucibus libero congue et. Quisque convallis eu nisl et
                congue. Vivamus eget augue quis ante malesuada ullamcorper. Sed orci
                nulla, eleifend eget dui faucibus, facilisis aliquet ante. Suspendisse
                sollicitudin nibh lacus, ut bibendum risus elementum a.
            </p>
            <Link to="/"> Go To Home</Link>
        </Container>
    )
}

export default About