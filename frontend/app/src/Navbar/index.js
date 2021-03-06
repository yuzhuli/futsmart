import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {AsyncPlayerSearchBar} from './asyncSearchBar';


class MyNavbar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">FUTSMART</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        {/* <Nav.Link href="#link">Link</Nav.Link> */}
                        <NavDropdown title="Fluctuation Rankings" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/list/gold">Gold Players</NavDropdown.Item>
                            <NavDropdown.Item href="/list/icon">Icon Players</NavDropdown.Item>
                            {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <AsyncPlayerSearchBar allowNew={false} isLoading={false} multiple={false} options={[]} />
            </Navbar>
        );
    }
}

export default MyNavbar;