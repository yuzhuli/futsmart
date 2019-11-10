import React, { Component } from 'react';
import { Container, Navbar } from 'react-bootstrap';

export const SectionHeader =({header}) => {
    return (
        <>
        <style type="text/css">
        {`
          .navbar-h1 {
            background-color: DarkGray;
            color: black;
          }
        `}
        </style>

        <Container>
            <Navbar className="navbar" variant="h1" expand="lg">
            <Navbar.Brand>{header}</Navbar.Brand>
            </Navbar>
        </Container>
        </>
    );
}