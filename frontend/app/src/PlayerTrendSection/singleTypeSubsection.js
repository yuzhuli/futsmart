import React from "react";
import {MyPlayerRow} from "./playerRow";
// import {SectionHeader} from "../Navbar/sectionHeader";

export const SingleTypeSubsection = ({playerType, bgImgScr, topFiveUp, topFiveDown, isLoading}) => {
    return (
        <div>
        {/* <div style={{backgroundImage: `url("${bgImgScr}")`, backgroundSize: 'cover'}}> */}
            <div style={{width: '1250px', margin: '0 auto', position: 'relative'}}>
                <div style={{position: 'absolute', width: '100%', height: '1px', left: '0', background: '#645215', opacity: 0.8}}/>
                {/* <SectionHeader header={playerType} /> */}
                <br></br>
                <div style={{fontWeight: 800, fontSize: '24px', fontFamily: 'sans-serif !important', color: 'rgb(72, 72, 72)'}}>
                    {playerType} Players
                </div>
                <br/>
                <MyPlayerRow playerType={playerType} priceType='Up' topFivePlayers={topFiveUp} isLoading={isLoading}/>
                <MyPlayerRow playerType={playerType} priceType='Down' topFivePlayers={topFiveDown} isLoading={isLoading}/>
            </div>
        </div>
    );
}