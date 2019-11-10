import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MyFigure } from "./figure";


export const MyPlayerList = ({increasingPlayers, decreasingPlayers}) => {
    return (
        <Container>
            <h5>Increasing</h5>
            <Row>
                {increasingPlayers.map(player => {
                    return (
                        <Col key={player.name}>
                            <MyFigure player={player}></MyFigure>
                        </Col>
                    );
                })}
            </Row>
            <h5>Decreasing</h5>
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