import React from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { MyFigure } from "./figure";

export const MyPlayerRow = ({priceTrend, topFivePlayers}) => {
    return (
        <>
            <Navbar>
                <Navbar.Brand >{priceTrend}</Navbar.Brand>
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Link href="/gold-list">See All</Nav.Link>
                    </Nav>
            </Navbar>
            <Row>
                {topFivePlayers.map(player => {
                    return (
                        <Col key={player.name}>
                            <MyFigure player={player}></MyFigure>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}