import React, { useState, useEffect } from 'react';
import { Container} from 'react-bootstrap';
import { MyBadge } from './badge';
import { RadarChart } from './radarChart';
import {SkillTablesSection} from './skillTablesSection';
import {REACT_APP_API_PREFIX} from '../globalConstants';

const PLAYER_TYPE_GOLD = 'Gold';
const PLAYER_TYPE_ICON = 'Icon';
const POSITION_GK = "GK";

const gkSkillDetailLabels = {
    'diving': [
        ['diving', 'Diving']
    ],
    'handling': [
        ['handling', 'Handling'],
    ],
    'kicking': [
        ['kicking', 'Kicking']
    ],
    'reflexes': [
        ['reflexes', 'Reflexes']
    ],
    'speed': [
        ['acceleration', 'Acceleration'],
        ['sprintspeed', 'Sprint Speed']
    ],
    'positioning': [
        ['positioning', 'Positioning']
    ]
}

const skillDetailLabels = {
    'pace': [
        ['acceleration', 'Acceleration'],
        ['sprintspeed', 'Sprint Speed'],
    ],
    'shooting': [
        ['positioning', 'Positioning'],
        ['finishing', 'Finishing'],
        ['shotpower', 'Shot Power'],
        ['longshots', 'Long Shot'],
        ['volleys', 'Volleys'],
        ['penalties', 'Penalties'],
    ],
    'passing': [
        ['vision', 'Vision'],
        ['crossing', 'Crossing'],
        ['fk_accuracy', 'FK. Accuracy'],
        ['shortpassing', 'Short Passing'],
        ['longpassing', 'Long Passing'],
        ['curve', 'Curve'],
    ],
    'dribbling': [
        ['agility', 'Agility'],
        ['balance', 'Balance'],
        ['reactions', 'Reactions'],
        ['ballcontrol', 'Ball Control'],
        ['dribbling', 'Dribbling'],
        ['composure', 'Composure'],
    ],
    'defending': [
        ['interceptions', 'Interceptions'],
        ['headingaccuracy', 'Heading Accuracy'],
        ['def_awareness', 'Def. Awareness'],
        ['standingtackle', 'Standing Tackle'],
        ['slidingtackle', 'Sliding Tackle'],
    ],
    'physicality': [
        ['jumping', 'Jumping'],
        ['stamina', 'Stamina'],
        ['strength', 'Strength'],
        ['aggression', 'Aggresion'],
    ],
}

// const dummy_player = {
//     "player_type": PLAYER_TYPE_GOLD,
//     "club_img_url": "",
//     "nation_img_url": "",
//     "last_name": "",
//     "_id":"",
//     "ea_id":0,
//     "img_url":"",
//     "futbin_id":"",
//     "rating":0,
//     "position": "",
//     "updated_at":"",
//     "Name":"",
//     "Club":"",
//     "Nation":"",
//     "League":"",
//     "Skills":0,
//     "WeakFoot":0,
//     "Intl_Rep":0,
//     "Foot":"",
//     "Height":0,
//     "Weight":0,
//     "Revision":"",
//     "Def_WR":"",
//     "Att_WR":"",
//     "Addedon":"",
//     "main_pace":0,
//     "main_shooting":0,
//     "main_passing":0,
//     "main_dribbling":0,
//     "main_defending":0,
//     "main_physicality":0,
//     "acceleration":0,
//     "sprintspeed":0,
//     "positioning":0,
//     "finishing":0,
//     "shotpower":0,
//     "longshots":0,
//     "volleys":0,
//     "penalties":0,
//     "vision":0,
//     "crossing":0,
//     "fk_accuracy":0,
//     "shortpassing":0,
//     "longpassing":0,
//     "curve":0,
//     "agility":0,
//     "balance":0,
//     "reactions":0,
//     "ballcontrol":0,
//     "dribbling":0,
//     "composure":0,
//     "interceptions":0,
//     "headingaccuracy":0,
//     "def_awareness":0,
//     "standingtackle":0,
//     "slidingtackle":0,
//     "jumping":0,
//     "stamina":0,
//     "strength":0,
//     "aggression":0,
// }

const dummy_player2 = { 
    "penalties":0,
    "strength":0,
    "nation":"",
    "main_passing":0,
    "stamina":0,
    "rating":0,
    "longshots":0,
    "volleys":0,
    "ballcontrol":0,
    "skills":0,
    "acceleration":0,
    "fk_accuracy":0,
    "balance":0,
    "player_img_url":"",
    "shotpower":0,
    "club":"",
    "id":"",
    "height":0,
    "ea_id":0,
    "club_img_url":"",
    "league":"",
    "att_wr":"",
    "weight":0,
    "longpassing":0,
    "standingtackle":0,
    "ps_yellows_per_game":"",
    "crossing":0,
    "futbin_id":"",
    "nation_img_url":"",
    "revision":"",
    "vision":0,
    "main_dribbling":0,
    "def_wr":"",
    "ps_games_played":0,
    "name":"",
    "position":"",
    "agility":0,
    "main_defending":0,
    "def_awareness":0,
    "composure":0,
    "jumping":0,
    "curve":0,
    "ps_reds_played":"",
    "main_physicality":0,
    "slidingtackle":0,
    "addedon":"",
    "finishing":0,
    "dribbling":0,
    "updated_at":"",
    "positioning":0,
    "foot":"Right",
    "main_pace":0,
    "intl_rep":0,
    "ps_goals_per_game":"",
    "ps_assists_per_game":"",
    "aggression":0,
    "interceptions":0,
    "main_shooting":0,
    "shortpassing":0,
    "sprintspeed":0,
    "headingaccuracy":0,
    "reactions":0,
    "weakfoot":0,
    "age":""
 }

function process_raw_player_data(raw_player) {
    const name_arr = raw_player['name'].split(' ');
    raw_player['last_name'] = name_arr[name_arr.length - 1];
    raw_player['player_type'] = raw_player['club'] === "Icons" ? PLAYER_TYPE_ICON : PLAYER_TYPE_GOLD;
}

export const Profile = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [player, setPlayer] = useState(dummy_player2);
    const playerid = props.match.params.playerid;

    useEffect(() => {
        fetch(REACT_APP_API_PREFIX + `/api/player/${playerid}`)
        .then(response => response.json())
        .then(data => {
            process_raw_player_data(data);
            setPlayer(data);
            setIsLoading(false);
        })
        .catch(err => {console.log(err);});
    }, [playerid]);

    return (
        <Container style={{position: 'relative'}}>
            <div style={{fontWeight: 800, fontSize: '24px', fontFamily: 'sans-serif !important', color: 'rgb(72, 72, 72)'}}>
                {player.Name} Profile
            </div>

            <div style={{position: 'absolute', width: '100%', top: '40px', height: '1px', left: '0', background: '#645215', opacity: 0.8}}/>

            <div style={{width: '225px', position: 'absolute', top: '60px'}}>
                <MyBadge playerType={player.player_type} player={player} isLoading={isLoading} lastName={player.last_name}/>
            </div>

            <div style={{ left: '150px', position: 'absolute', top: '45px', width: '800px', height: '450px'}}>
                <RadarChart player={player} skillNames={player.position.toUpperCase() === POSITION_GK ? Object.keys(gkSkillDetailLabels) : Object.keys(skillDetailLabels)}></RadarChart>
            </div>

            <div style={{position: 'absolute', width: '100%', top: '460px', height: '1px', left: '0', background: '#645215', opacity: 0.8}}/>

            <SkillTablesSection player={player} skillDetailLabels={player.position.toUpperCase() === POSITION_GK ? gkSkillDetailLabels : skillDetailLabels}/>
        </Container>
    );
}