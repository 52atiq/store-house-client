import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { auth } from '../../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignout = () =>{
      signOut(auth)
  }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">Store House </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
      
    </Nav>
    <Nav>
    <Nav.Link  href='home#services'>Manage Items</Nav.Link>
      <Nav.Link as={Link} to="/blog">Add Items</Nav.Link>
      <Nav.Link as={Link} to="/blog">My Items</Nav.Link>
      <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
     
     { user ? 
    //  <button className='btn btn-link text-black text-decoration-none' onClick={handleSignout}> Sign Out </button>
     <Nav.Link onClick={handleSignout} as={Link} to="login"> Sign Out</Nav.Link> 
     :
      <Nav.Link as={Link} to="login">Login</Nav.Link> }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;