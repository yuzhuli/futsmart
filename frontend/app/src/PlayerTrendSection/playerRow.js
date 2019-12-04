import React from "react";
import { Row, Col, Nav, Navbar } from "react-bootstrap";
import { MyFigure } from "./figure";

export const MyPlayerRow = ({playerType, priceType, topFivePlayers, isLoading}) => {
    return (
        <>
            <Navbar>
                <Navbar.Brand style={{fontWeight: 500, fontSize: '20px', fontFamily: 'sans-serif !important', color: 'rgb(72, 72, 72)',}}>
                    Price {priceType} - Top 5
                </Navbar.Brand >
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Link href={`/list/${playerType}`} style={{fontWeight: 600, fontSize: '17px', fontFamily: 'sans-serif !important', color: 'rgb(0, 132, 137)',}}>
                            See All >
                        </Nav.Link>
                    </Nav>
            </Navbar>
            <Row>

                {topFivePlayers.map(player => {
                    return (
                        <Col key={player.Name + Math.random().toString()}>
                            <MyFigure playerType={playerType} priceType={priceType} player={player} isLoading={isLoading}></MyFigure>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}