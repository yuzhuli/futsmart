import React from 'react';
import ultimateCard from '../images/ultimateCard.png';
import pirlo from '../images/pirlo.png';
import { Container, Row, Image, Col, Card } from 'react-bootstrap';

export const MyBadge = () => {
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
        </Container>
    );
}