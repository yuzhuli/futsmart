import React from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom";
import { MyFigure } from "./figure";

export const MyPlayerRow = ({playerType, priceType, topFivePlayers, isLoading}) => {
    return (
        <>
            <Navbar>
                <Navbar.Brand >Price {priceType} - Top 5</Navbar.Brand>
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Link to={{pathname: `/list/${playerType}`}}>See All</Nav.Link>
                    </Nav>
            </Navbar>
            <Row>

                {!isLoading &&
                    topFivePlayers.map(player => {
                    return (
                        <Col key={player.name}>
                            <MyFigure playerType={playerType} priceType={priceType} player={player} isLoading={isLoading}></MyFigure>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}