import React from "react";
import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { MyFigure } from "./figure";


export const MyPlayerList = ({increasingPlayers, decreasingPlayers}) => {
    return (
        <Container>
            <Navbar>
                <Navbar.Brand >Increasing</Navbar.Brand>
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Link href="/">See All</Nav.Link>
                    </Nav>
            </Navbar>
            <Row>
                {increasingPlayers.map(player => {
                    return (
                        <Col key={player.name}>
                            <MyFigure player={player}></MyFigure>
                        </Col>
                    );
                })}
            </Row>
            <Navbar>
                <Navbar.Brand >Decreasing</Navbar.Brand>
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Link href="/">See All</Nav.Link>
                    </Nav>
            </Navbar>
            <Row>
                {decreasingPlayers.map(player => {
                    return (
                        <Col key={player.name} >
                            <MyFigure player={player}></MyFigure>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}