import React from "react";
import {MyPlayerRow} from "./playerRow";

export const SingleTypeSubsection = ({playerType, topFiveUp, topFiveDown, isLoading}) => {
    return (
        <div style={{width: '1250px', margin: '0 auto', position: 'relative'}}>
            <div style={{position: 'absolute', width: '100%', height: '1px', left: '0', background: '#645215', opacity: 0.8}}/>
            <br/>
            <div style={{fontWeight: 800, fontSize: '24px', fontFamily: 'sans-serif !important', color: 'rgb(72, 72, 72)'}}>
                Fluctuation Ranking - {playerType} Players
            </div>
            <br/>
            <MyPlayerRow playerType={playerType} priceType='Up' topFivePlayers={topFiveUp} isLoading={isLoading}/>
            <MyPlayerRow playerType={playerType} priceType='Down' topFivePlayers={topFiveDown} isLoading={isLoading}/>
            <br/><br/>
        </div>
    );
}