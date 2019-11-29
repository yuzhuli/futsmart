import React from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { MyFigure } from "./figure";
import {MyBadge} from "../Profile/badge.js";

export const MyPlayerRow = ({increasingPlayers, decreasingPlayers}) => {
    return (
        <div style={{width: '1250px', margin: '0 auto'}}>
            <Navbar>
                <Navbar.Brand >Increasing</Navbar.Brand>
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Link href="/gold-list">See All</Nav.Link>
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
                        <Nav.Link href="/gold-list">See All</Nav.Link>
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
        </div>
    );
}