import React from "react";
import {MyPlayerRow} from "./playerRow";
import {SectionHeader} from "../Navbar/sectionHeader";

export const SingleTypeSubsection = ({playerType, bgImgScr, topFiveUp, topFiveDown, isLoading}) => {
    return (
        <div style={{backgroundImage: `url("${bgImgScr}")`, backgroundSize: 'cover'}}>
            <div style={{width: '1250px', margin: '0 auto'}}>
                <SectionHeader header={playerType} />
                <br/>
                <MyPlayerRow playerType={playerType} priceType='Up' topFivePlayers={topFiveUp} isLoading={isLoading}/>
                <MyPlayerRow playerType={playerType} priceType='Down' topFivePlayers={topFiveDown} isLoading={isLoading}/>
            </div>
        </div>
    );
}