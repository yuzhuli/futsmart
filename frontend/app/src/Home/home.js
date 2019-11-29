import React from 'react'
import {SectionHeader} from '../Navbar/sectionHeader'
import { MyPlayerRow } from '../PlayerRow/playerRow';
import { MarketTrend } from '../Market/marketTrend';
import argentina from '../images/flag.png';
import barcelona from '../images/club.png';
import messi from '../images/messi.png';

const player = {
  name: 'messi',
  position: 'rw',
  pic: messi,
  country: argentina,
  club: barcelona,
  totalScore: '94',
  pac: '87',
  sho: '92',
  pas: '92',
  dri: '96',
  def: '39',
  phy: '66',
  price: '100',
  percent: '5%',
};


const players = [player, player, player, player, player];

export const Home = () => {
    return (
        <div>
            <MarketTrend />
            <br/>

            <div style={{backgroundImage: 'url("https://i.imgur.com/KfitD6h.jpg")', backgroundSize: 'cover'}}>
              <SectionHeader header="Golden Player" />
              <br/>
              <MyPlayerRow increasingPlayers={players} decreasingPlayers={players}/>
              <br/>
            </div>
        </div>
    );
}