<<<<<<< HEAD
=======
// Navbar.js
>>>>>>> b4799fa (Transfer From Thymeleaf)
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = ({ isLoggedIn }) => {
  return (      
    <Navbar bg="light" expand="lg" className="navbar navbar-expand-lg navbar-light bg-light rounded font-weight-bold">
    <Container>
    
      <Navbar.Brand href="/" color="color: #5e9ca0;">Knowledge Base</Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/login">Log In</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
          {isLoggedIn && (
            <>
              <Nav.Link href="/article/create">Create Article</Nav.Link>
              <Nav.Link href="/article/all">All Articles</Nav.Link>
              <Nav.Link href="/article/my">My Articles</Nav.Link>
              <Nav.Link href="/article/draft">Draft Articles</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
