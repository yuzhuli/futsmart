import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import {SingleTypePlayerList} from './singleTypePlayerList';
import {API_PREFIX} from '../globalConstants';

const PLAYER_LIST_TYPE_GOLD = 'Gold';
const PLAYER_LIST_TYPE_ICON = 'Icon';
const PRICE_TYPE_UP = 'Up';
const PRICE_TYPE_DOWN = 'Down';

function generate_players() {
    const dummy_players = {
        'top_increasing_gold': [],
        'top_decreasing_gold': [],
        'top_increasing_icon': [],
        'top_decreasing_icon': [],
    };

    for (const key in dummy_players) {
        for (let i = 0; i < 20; i++) {
            const dummy_player = {
                "Name":"",
                "id": -i,
                "rating":0,
                "position":"",
                "Club":"",
                "main_pace":0,
                "main_shooting":0,
                "main_passing":0,
                "main_dribbling":0,
                "main_defending":0,
                "main_physicality":0,
                "price_diff_percentage":"0%",
                "price_diff":0,
                "price":0,
                "club_img_url":"",
                "nation_img_url":"",
                "player_img_url":""
            };
            dummy_players[key].push(dummy_player);
        }
    }
    return dummy_players;
}

function process_raw_player_data(raw_players) {
    for (const key in raw_players) {
        raw_players[key].forEach(player => {
            const percentage = Math.abs(player['price_diff_percentage']) * 100;
            const rounded_percentage = percentage.toFixed(2) + "%";
            player["price_diff_percentage"] = rounded_percentage
        });
    }
}
   
export const PlayerListSection = (props) => {
    const [players, setPlayers] = useState(generate_players());
    const type = props.match.params.type.toLowerCase() === 'gold' ? PLAYER_LIST_TYPE_GOLD :  PLAYER_LIST_TYPE_ICON;

    useEffect(() => {
        fetch(API_PREFIX + "/api/trendy_players")
        .then((response) => response.json())
        .then((data) => {
            process_raw_player_data(data);
            setPlayers(data);

        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div style={{width: '1250px', margin: '0 auto', position: 'relative'}}>
            <br/>
            <div style={{fontWeight: 800, fontSize: '24px', fontFamily: 'sans-serif !important', color: 'rgb(72, 72, 72)'}}>
                Fluctuation Ranking - {type} Players
            </div>
            <br/>
            <Row>
                <Col>
                    <SingleTypePlayerList 
                        priceType={PRICE_TYPE_UP} 
                        players={type === PLAYER_LIST_TYPE_GOLD ? players['top_increasing_gold'] : players['top_increasing_icon']}
                    />
                </Col>
                <Col>
                    <SingleTypePlayerList 
                        priceType={PRICE_TYPE_DOWN} 
                        players={type === PLAYER_LIST_TYPE_GOLD ? players['top_decreasing_gold'] : players['top_decreasing_icon']}
                    />
                </Col>
            </Row>
        </div>
    );
}