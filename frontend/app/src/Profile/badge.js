import React from 'react';
import messi from '../images/messi.png';
import {Image,} from 'react-bootstrap';
import flag from '../images/flag.png';
import club from '../images/club.png';

export const MyBadge = ({player, isLoading}) => {
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
        textTransform: 'uppercase',
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

    const threeHorLineDiv = {
        position: 'absolute',
        top: '61%',
        width: '70%',
        height: '1px',
        left: '15%',
        opacity: 0.8,
        zIndex: 1,
        background: '#645215',
        lineHeight: '18px',
        display: 'block',
    }

    const paceStyle = {
        position: 'absolute',
        fontSize: '18px',
        fontFamily: '"DINPro-Cond",Arial,sans-serif !important',
        left: '40px',
        top: '195px',
        lineHeight: '18px',
        display: 'block',
        color: '#4d331f',
        textAlign: 'left',
        textTransform: 'uppercase',
    }

    const shoStyle = {
        position: 'absolute',
        fontSize: '18px',
        fontFamily: '"DINPro-Cond",Arial,sans-serif !important',
        left: '40px',
        top: '215px',
        lineHeight: '18px',
        display: 'block',
        color: '#4d331f',
        textAlign: 'left',
        textTransform: 'uppercase',
    }

    const pasStyle = {
        position: 'absolute',
        fontSize: '18px',
        fontFamily: '"DINPro-Cond",Arial,sans-serif !important',
        left: '40px',
        top: '235px',
        lineHeight: '18px',
        display: 'block',
        color: '#4d331f',
        textAlign: 'left',
        textTransform: 'uppercase',
    }

    const driStyle = {
        position: 'absolute',
        fontSize: '18px',
        fontFamily: '"DINPro-Cond",Arial,sans-serif !important',
        left: '125px',
        top: '195px',
        lineHeight: '18px',
        display: 'block',
        color: '#4d331f',
        textAlign: 'left',
        textTransform: 'uppercase',
    }

    const defStyle = {
        position: 'absolute',
        fontSize: '18px',
        fontFamily: '"DINPro-Cond",Arial,sans-serif !important',
        left: '125px',
        top: '215px',
        lineHeight: '18px',
        display: 'block',
        color: '#4d331f',
        textAlign: 'left',
        textTransform: 'uppercase',
    }

    const phyStyle = {
        position: 'absolute',
        fontSize: '18px',
        fontFamily: '"DINPro-Cond",Arial,sans-serif !important',
        left: '125px',
        top: '235px',
        lineHeight: '18px',
        display: 'block',
        color: '#4d331f',
        textAlign: 'left',
        textTransform: 'uppercase',
    }

    const vertLineStyle = {
        position: 'absolute',
        height: '18%',
        left: '49%',
        width: '1px',
        top: '64%',
        opacity: 0.8,
        background: '#645215',
    }

    const bottomLineStyle = {
        position: 'absolute',
        top: '84%',
        width: '10%',
        height: '1px',
        left: '44%',
        opacity: 0.8,
        background: '#645215',
    }

    return (
        // <Container>
            <div style={bgDivStyle}>
                {isLoading &&
                    <>
                    <div style={scoreItemStyle}>{player.totalScore}</div>
                    <div style={positionItemStyle}>{player.position}</div>
                    <div style={topOneHorLineStyle} />
                    <div style={countryDivStyle}>
                        <Image style={{maxWidth: '30px', verticalAlign: 'middle'}} src={player.country}/>
                    </div>
                    <div style={topTwoHorLineStyle} />
                    <div style={clubDivStyle}>
                        <Image style={{width: '26px', verticalAlign: 'middle'}} src={player.club}/>
                    </div>
                    <div style={picDivStyle}>
                        <Image style={{width: '122px', verticalAlign: 'middle'}} src={player.pic}/>
                    </div>
                    <div style={nameDivStyle}>{player.name}</div>
                    <div style={threeHorLineDiv} />
                    <div style={paceStyle}>{player.pac} PAC</div>
                    <div style={shoStyle}>{player.sho} SHO</div>
                    <div style={pasStyle}>{player.pas} pas</div>
                    <div style={driStyle}>{player.dri} dri</div>
                    <div style={defStyle}>{player.def} def</div>
                    <div style={phyStyle}>{player.phy} phy</div>
                    <div style={vertLineStyle}></div>
                    <div style={bottomLineStyle}></div>
                    </>
                }
            </div>
        // </Container>
    );
}