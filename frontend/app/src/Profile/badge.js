import React from 'react';
import {Image,} from 'react-bootstrap';

export const MyBadge = ({playerType, player, isLoading, lastName}) => {
    var badgeBgdImg = "";
    var fontColor = "";

    if (playerType === "Gold") {
        badgeBgdImg = "https://i.imgur.com/s2A3Icy.png";
        fontColor = "#4d331f";
    }

    if (playerType === "Icon") {
        badgeBgdImg = "https://i.imgur.com/NBCWi42.png";
        // fontColor = "#e1c775";
        fontColor = "#625217";
    }

    const bgDivStyle = {
        position: 'relative',
        top: 0,
        left: 0,
        width: '220px',
        height: '305px',
        backgroundImage: `url(${badgeBgdImg})`,
        backgroundSize: '105%',
        backgroundPositionX: '-6px',
        backgroundPositionY: '-5px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        margin: 'auto',
    }

    const scoreItemStyle = {
        position: 'absolute',
        color: fontColor,
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
        color: fontColor,
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
        color: fontColor,
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
        color: fontColor,
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
        color: fontColor,
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
        color: fontColor,
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
        color: fontColor,
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
        color: fontColor,
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
        color: fontColor,
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
            <div style={bgDivStyle}>
                {!isLoading &&
                    <>
                    <div style={scoreItemStyle}>{player.rating}</div>
                    <div style={positionItemStyle}>{player.position}</div>
                    <div style={topOneHorLineStyle} />
                    <div style={countryDivStyle}>
                        <Image style={{maxWidth: '30px', verticalAlign: 'middle'}} src={player.nation_img_url}/>
                    </div>
                    <div style={topTwoHorLineStyle} />
                    <div style={clubDivStyle}>
                        <Image style={{width: '26px', verticalAlign: 'middle'}} src={player.club_img_url}/>
                    </div>
                    <div style={picDivStyle}>
                        <Image style={{width: '122px', verticalAlign: 'middle'}} src={player.player_img_url}/>
                    </div>
                    <div style={nameDivStyle}>{lastName}</div>
                    <div style={threeHorLineDiv} />
                    <div style={paceStyle}>{player.main_pace} PAC</div>
                    <div style={shoStyle}>{player.main_shooting} SHO</div>
                    <div style={pasStyle}>{player.main_passing} pas</div>
                    <div style={driStyle}>{player.main_dribbling} dri</div>
                    <div style={defStyle}>{player.main_defending} def</div>
                    <div style={phyStyle}>{player.main_physicality} phy</div>
                    <div style={vertLineStyle}></div>
                    <div style={bottomLineStyle}></div>
                    </>
                }
            </div>
    );
}