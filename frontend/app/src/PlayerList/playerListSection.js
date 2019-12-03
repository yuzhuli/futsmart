import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import {SingleTypePlayerList} from './singleTypePlayerList';

const PLAYER_LIST_TYPE_GOLD = 'Gold';
const PLAYER_LIST_TYPE_ICON = 'Icon';

export const PlayerListSection = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [increasingPlayersGold, setIncreasingPlayersGold] = useState([]);
    const [decreasingPlayersGold, setDecreasingPlayersGold] = useState([]);
    const [increasingPlayersIcon, setIncreasingPlayersIcon] = useState([]);
    const [decreasingPlayersIcon, setDecreasingPlayersIcon] = useState([]);
    const type = props.match.params.type.toLowerCase() === 'gold' ? PLAYER_LIST_TYPE_GOLD :  PLAYER_LIST_TYPE_ICON;

    useEffect(() => {
        fetch("http://localhost:3001/api/trendy_players")
        .then((response) => response.json())
        .then((data) => {
            setIncreasingPlayersGold(data['top_increasing_gold']);
            setDecreasingPlayersGold(data['top_decreasing_gold']);
            setIncreasingPlayersIcon(data['top_increasing_icon']);
            setDecreasingPlayersIcon(data['top_decreasing_icon']);
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div style={{width: '1300px', margin: '0 auto', position: 'relative'}}>
            <br/>
            <div style={{fontWeight: 800, fontSize: '24px', fontFamily: 'sans-serif !important', color: 'rgb(72, 72, 72)'}}>
                Fluctuation Ranking - {type} Players
            </div>
            <br/>
            <Row>
                <Col key="up">
                    {!isLoading &&
                    <SingleTypePlayerList priceType="Up" players={type === PLAYER_LIST_TYPE_GOLD ? increasingPlayersGold : increasingPlayersIcon}></SingleTypePlayerList>
                    }
                </Col>
                <Col key="down">
                    {!isLoading &&
                    <SingleTypePlayerList priceType="Down" players={type === PLAYER_LIST_TYPE_GOLD ? decreasingPlayersGold : decreasingPlayersIcon}></SingleTypePlayerList>
                    }
                </Col>
            </Row>
        </div>
    );
}