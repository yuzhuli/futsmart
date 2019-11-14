import React from 'react';
import ultimateCard from '../images/ultimateCard.png';
import pirlo from '../images/pirlo.png';
import messi from '../images/messi.png';
import { Container, Row, Image, Col } from 'react-bootstrap';
import flag from '../images/flag.png';
import club from '../images/club.png';


export const MyBadge = ({player}) => {
    const bgDivStyle = {
        position: 'relative',
        top: 0,
        left: 0,
        width: '220px',
        height: '305px',
        backgroundImage: 'url("https://i.imgur.com/s2A3Icy.png")',
        backgroundSize: '105%',
        backgroundPositionX: '-6px',
        backgroundPositionY: '-5px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        margin: 'auto',
    }

    const scoreItemStyle = {
        position: 'absolute',
        color: '#4d331f ',
        width: '45px',
        left: '42px',
        textAlign: 'center',
        top: '30px',
        lineHeight: '44px',
        fontSize: '40px',
        textTransform: 'uppercase',
        fontFamily: '"DINPro-Cond-Med",Arial,sans-serif !important',
        zIndex: 1,
        display: 'block',
    }

    const positionItemStyle = {
        position: 'absolute',
        fontSize: '18px',
        top: '70px',
        width: '30px',
        left: '49px',
        textAlign: 'center',
        fontWeight: 700,
        fontFamily: '"DINPro-Cond",Arial,sans-serif !important',
        zIndex: 1,
        color: '#4d331f',
        lineHeight: '18px',
        display: 'block',
    }

    const topOneHorLineStyle = {
        position: 'absolute',
        top: '30.5%',
        width: '10%',
        height: '1px',
        left: '23%',
        opacity: 0.8,
        zIndex: 1,
        background: '#645215',
    }

    const countryDivStyle = {
        left: '43px',
        top: '97px',
        width: '37px',
        textAlign: 'center',
        zIndex: 1,
        lineHeight: '18px',
        position: 'absolute',
        display: 'block',
    }

    const topTwoHorLineStyle = {
        position: 'absolute',
        top: '40%',
        width: '10%',
        height: '1px',
        left: '23%',
        opacity: 0.8,
        zIndex: 1,
        background: '#645215',
    }

    const clubDivStyle = {
        position: 'absolute',
        left: '48px',
        top: '124px',
        zIndex: 1,
        lineHeight: '18px',
        display: 'block',
        textAlign: 'left',
    }

    const picDivStyle = {
        position: 'absolute',
        height: 'auto',
        left: '75px',
        top: '42px',
        width: '112px',
        lineHeight: '18px',
        display: 'block',
    }

    const nameDivStyle = {
        position: 'absolute',
        left: '19px',
        textAlign: 'center',
        top: '162px',
        width: '180px',
        textTransform: 'uppercase',
        letterSpacing: '-0.2px',
        lineHeight: '26px',
        fontFamily: '"DINPro-Cond-Bold",Arial,sans-serif !important',
        fontSize: '22px',
        zIndex: 1,
        display: 'block',
        color: '#4d331f',
    }

    const listItemStyle = {
        color: '#4d331f ',
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
        // <Container>
            <div style={bgDivStyle}>
                <div style={scoreItemStyle}>94</div>
                <div style={positionItemStyle}>RW</div>
                <div style={topOneHorLineStyle} />
                <div style={countryDivStyle}>
                    <Image style={{maxWidth: '30px', verticalAlign: 'middle'}} src={flag}/>
                </div>
                <div style={topTwoHorLineStyle} />
                <div style={clubDivStyle}>
                    <Image style={{width: '26px', verticalAlign: 'middle'}} src={club}/>
                </div>
                <div style={picDivStyle}>
                    <Image style={{width: '122px', verticalAlign: 'middle'}} src={messi}/>
                </div>
                <div style={nameDivStyle}>messi</div>
                {/* <Row>
                    <Col>
                        <div style={scoreItemStyle}>94</div>
                        <div style={positionItemStyle}>RW</div>
                        <Row>
                            <Image src={flag} style={innerImgStyle}></Image>
                        </Row>
                        <Row>
                            <Image src={club} style={innerImgStyle}></Image>
                        </Row>
                    </Col>
                    <Col><Image src={messi} style={{maxWidth: '100%', marginTop: '30px', marginRight: '40px'}} ></Image></Col>
                </Row> */}
                {/* <div style={nameStyle}>messi</div>
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
                <div style={hrStyle}></div> */}
            </div>
        // </Container>
    );
}