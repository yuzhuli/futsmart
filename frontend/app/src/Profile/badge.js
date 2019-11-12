import React from 'react';
import ultimateCard from '../images/ultimateCard.png';
import pirlo from '../images/pirlo.png';
import { Container, Row, Image, Col, Card } from 'react-bootstrap';
import { node } from 'prop-types';

export const MyBadge = ({player}) => {
    const firstRowDivStyle = {
        position: 'relative',
        top: 60,
        left: 0,
        border: '5px solid pink',
    }

    const divStyle = {
        position: 'relative',
        top: 0,
        left: 0,
        width: '280px',
        height: '500px',
        border: '5px solid pink',
        backgroundImage: 'url("https://i.imgur.com/SDgM841.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }

    const pStyle = {
        color: 'white',
        paddingLeft: '40px',
        fontSize: '150%',
    }

    return (
        <Container>
            <div style={divStyle}>
                <div style={firstRowDivStyle}>
                <Row>
                    <Col><div style={pStyle}>94</div></Col>
                    <Col><Image src={pirlo}></Image></Col>
                </Row>
                </div>
            </div>
        </Container>
        // <Container>

        //     <Card border="light" text="white" style={{ width: '22rem' }}>
        //         <Card.Img src={ultimateCard} />
        //         <Card.ImgOverlay style={{textAlign:"center"}}>
        //             <br/>
        //             <Image src={pirlo} />
        //             <Card.Text >Pirlo</Card.Text>
        //         </Card.ImgOverlay>
        //     </Card>


        //     <Card border="light" text="primary" style={{ width: '22rem' }}>
        //         <Card.Img variant="top" src={ultimateCard} />
        //         <Card.ImgOverlay >
        //             <br/>
        //             <Row>
        //                 <Col key={player.score}>
        //                     <Card.Text>94</Card.Text>
        //                 </Col>
        //                 <Col key={player.name}>
        //                     <Image src={pirlo} />
        //                 </Col>
        //             </Row>
        //             <Card.Text>94</Card.Text>
        //         </Card.ImgOverlay>
        //     </Card>

        // </Container>
    );
}