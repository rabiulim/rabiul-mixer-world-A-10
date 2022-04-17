import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';



const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignout = () => {
        signOut(auth)
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <p className='fs-1 my-3 text-dark fw-bold'>Rabiul Mixer World</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='fs-4 text-white fw-bolder' href="home#services">Services</Nav.Link>
                            <Nav.Link className='fs-4 text-white fw-bolder' as={Link} to="/blog">Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='fs-4 text-white fw-bolder my-3' as={Link} to="/aboutme">About</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none
                                    fw-bolder fs-4 my-3' onClick={handleSignout}>SignOut</button>
                                    :
                                    <Nav.Link as={Link}
                                        className='fs-4 text-white fw-bolder my-3' to="/login">
                                        Login
                                    </Nav.Link>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;