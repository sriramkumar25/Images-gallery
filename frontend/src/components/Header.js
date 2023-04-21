import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const navbarStyle = {
  backgroundColor: 'blue'
};

const Header = () => {
  return (
    <Navbar style={navbarStyle} variant="dark">
      <Container>
        <Navbar.Brand href="/">Images Gallery</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
