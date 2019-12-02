import React from 'react';
import {Navbar } from 'react-bootstrap';

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

        <div style={{width: '1250px', margin: '0 auto'}}>
            <Navbar className="navbar" variant="h1" expand="lg">
            <Navbar.Brand>{header}</Navbar.Brand>
            </Navbar>
        </div>
        </>
    );
}