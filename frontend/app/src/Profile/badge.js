import React from 'react';
import ultimateCard from '../images/ultimateCard.png';
import pirlo from '../images/pirlo.png';
import { Container, Row, Image, Col } from 'react-bootstrap';
import flag from '../images/flag.png';
import club from '../images/club.png';


export const MyBadge = ({player}) => {
    const firstRowDivStyle = {
        position: 'relative',
        top: 60,
        left: 0,
    }

    const innerImgStyle = {
        display: 'block',
        marginLeft: '50px',
        marginTop: '10px',
        maxWidth: '40%',
    }

    const bgDivStyle = {
        position: 'relative',
        top: 0,
        left: 0,
        width: '280px',
        height: '500px',
        // border: '5px solid pink',
        backgroundImage: 'url("https://i.imgur.com/SDgM841.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }

    const pStyle = {
        color: 'PaleGoldenRod ',
        marginLeft: '55px',
        marginTop: '5px',
        fontSize: '150%',
        textTransform: 'uppercase',
        fontFamily: '"DINPro-Cond-Bold",Arial,sans-serif',
        fontWeight: 'bold',
    }

    const listItemStyle = {
        color: 'PaleGoldenRod ',
        textAlign: 'center',
        // marginLeft: '30px',
        // marginRight: '10px',
        marginTop: '2px',
        fontSize: '20px',
        textTransform: 'uppercase',
        fontFamily: '"DINPro-Cond-Bold",Arial,sans-serif',
    }

    const vertLineStyle = {
        borderLeft: '2px solid PaleGoldenRod',
        height: '80px',
        position: 'absolute',
        left: '50%',
        marginLeft: '-3px',
        top: '72%',
    }

    const hrStyle = {
        // position: 'absolute',
        borderTop: '2px solid PaleGoldenRod',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '5px',
        width: '80%',
    }

    const nameStyle = {
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: '"DINPro-Cond-Bold",Arial, sans-serif !important',
        fontSize: '22px',
        color: 'PaleGoldenRod ',
        lineHeight: '26px',
        fontWeight: 'bold',
    }

    return (
        <Container>
            <div style={bgDivStyle}>
                <div style={firstRowDivStyle}>
                    <Row>
                        <Col>
                            <Row>
                                <div style={pStyle}>94</div>
                            </Row>
                            <Row>
                                <div style={pStyle}>RW</div>
                            </Row>
                            <Row>
                                <Image src={flag} style={innerImgStyle}></Image>
                            </Row>
                            <Row>
                                <Image src={club} style={innerImgStyle}></Image>
                            </Row>
                        </Col>
                        <Col><Image src={pirlo} ></Image></Col>
                    </Row>
                    <div style={nameStyle}>Pirlo</div>
                    <div style={hrStyle}/>
                    <Row>
                        <Col>
                            <div style={listItemStyle}>87 PAC</div>
                            <div style={listItemStyle}>92 sho</div>
                            <div style={listItemStyle}>92 pas</div>
                        </Col>
                        <div style={vertLineStyle}></div>
                        <Col>
                            <div style={listItemStyle}>96 dri</div>
                            <div style={listItemStyle}>39 def</div>
                            <div style={listItemStyle}>66 phy</div>
                        </Col>
                    </Row>
                    <div style={hrStyle}></div>
                </div>
            </div>
        </Container>
    );
}