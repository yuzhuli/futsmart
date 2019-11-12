import React from 'react';
import ultimateCard from '../images/ultimateCard.png';
import pirlo from '../images/pirlo.png';
import { Container, Row, Image, Col, Card } from 'react-bootstrap';

export const MyBadge = ({player}) => {
    return (
        <Container>
            <Card border="light" text="white" style={{ width: '22rem' }}>
                <Card.Img src={ultimateCard} />
                <Card.ImgOverlay style={{textAlign:"center"}}>
                    <br/>
                    <Image src={pirlo} />
                    <Card.Text >Pirlo</Card.Text>
                </Card.ImgOverlay>
            </Card>


            <Card border="light" text="primary" style={{ width: '22rem' }}>
                <Card.Img variant="top" src={ultimateCard} />
                <Card.ImgOverlay >
                    <br/>
                    <Row>
                        <Col key={player.score}>
                            <Card.Text>94</Card.Text>
                        </Col>
                        <Col key={player.name}>
                            <Image src={pirlo} />
                        </Col>
                    </Row>
                    <Card.Text>94</Card.Text>
                </Card.ImgOverlay>
            </Card>

        </Container>
    );
}