import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MyFigure } from "./figure";

export const MyPlayerList = ({players}) => {
    return (
        <Container>
            <Row>
                {players.map(pp => {
                    return (
                        <Col xs={6} md={4}>
                            <MyFigure player={pp}></MyFigure>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}