import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { auth } from '../../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import logo from '../../../assets/logo/logo.png'
const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignout = () =>{
      signOut(auth)
  }
    return (
        <div>
            {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> */}
            <Navbar collapseOnSelect expand="lg" className='bg-amber-400' fixed='top'>
  <Container>
  {/* <Navbar.Brand href="/"> <img className='h-10' src={logo} alt="" /> Store House </Navbar.Brand> */}
 <div className='flex gap-2'>
 <img className='h-10 gap-3' src={logo} alt="" />
  <Navbar.Brand href="/" className='text-amber-800 font-semibold text-2xl'> STORE-HOUSE </Navbar.Brand>
 </div>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
      
    </Nav>
    <Nav>
     
      <Nav.Link className='text-white text-lg font-semibold' as={Link} to="/blog">Blog</Nav.Link>
     
     { user ? 
    //  <button className='btn btn-link text-black text-decoration-none' onClick={handleSignout}> Sign Out </button>
    <Nav  >
     <Nav.Link className='text-white text-lg font-semibold'  as={Link} to ='manageinventory'>Manage Items</Nav.Link>
     <Nav.Link className='text-white text-lg font-semibold' as={Link} to="/additem">Add Item</Nav.Link>
     <Nav.Link className='text-white text-lg font-semibold' as={Link} to="/myitem">My Items</Nav.Link>
     <Nav.Link className='text-white text-lg font-semibold' onClick={handleSignout} as={Link} to="login"> Sign Out</Nav.Link> 
     </Nav>
     :
      <Nav.Link className='text-white text-lg font-semibold' as={Link} to="login">Login</Nav.Link> }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;