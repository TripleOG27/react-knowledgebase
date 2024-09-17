// Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light fixed-bottom" key="footer">
      <Container className="container-fluid bg-light rounded">
        <span className="text-dark font-weight-bold p-2 text-center">© CopyRight Gang Star Web Design Studios 2022. All
        rights reserved.</span>
      </Container>
    </footer>
  );
};

export default Footer;
