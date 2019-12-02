import React from 'react'
import { MarketTrend } from '../Market/marketTrend';
import {PlayerTrendSection} from '../PlayerTrendSection/playerTrendSection';

export const Home = () => {
    return (
        <div>
            <MarketTrend />
            <br/>

            {/* <PlayerTrendSection /> */}
        </div>
    );
}