import React, { useState } from 'react';
import { MyBadge } from './badge';
import { Container, Col, Row } from 'react-bootstrap';
import { RadarChart } from './radarChart';
import { SingleSkillTable } from './singleSkillTable';



export const Profile = (props) => {
    // uncomment the following when fetch player by id is implemented
    // const [isLoading, setIsLoading] = useState(true);
    // const [player, setPlayer] = useState(null);

    // useEffect(() => {
    //     fetch(`http://localhost:3001/player/${props.match.params.playerid}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         setPlayer(data);
    //         setIsLoading(false);
    //     })
    //     .catch(err => {console.log(err);});
    // }, []);

    const player = {
        "Name":"Thomas Partey",
        "rating":82,
        "position":"CM",
        "Club":"Atlético Madrid",
        "main_pace":73,
        "main_shooting":72,
        "main_passing":77,
        "main_dribbling":77,
        "main_defending":79,
        "main_physicality":84,
        "price_diff_percentage":0.1051478642,
        "price_diff":96,
        "price":1009,
        "club_img_url":"https://cdn.futbin.com/content/fifa20/img/clubs/240.png",
        "nation_img_url":"https://cdn.futbin.com/content/fifa20/img/nation/117.png",
        "player_img_url":"https://cdn.futbin.com/content/fifa20/img/players/209989.png?v=22"
    }

    return (
        <Container style={{position: 'relative'}}>
            <div style={{fontWeight: 800, fontSize: '24px', fontFamily: 'sans-serif !important', color: 'rgb(72, 72, 72)'}}>
                {player.Name} Profile
            </div>
            <div style={{position: 'absolute', width: '100%', top: '40px', height: '1px', left: '0', background: '#645215', opacity: 0.8}}/>
            <div style={{width: '225px', position: 'absolute', top: '60px'}}>
                <MyBadge playerType="Gold" player={player} isLoading={false} lastName="Messi"/>
            </div>
            <div style={{ left: '150px', position: 'absolute', top: '45px', width: '800px', height: '450px'}}>
                <RadarChart player={player}></RadarChart>
            </div>
            <div style={{position: 'absolute', width: '100%', top: '460px', height: '1px', left: '0', background: '#645215', opacity: 0.8}}/>
            <div>
                <div style={{position: 'absolute', top: '490px', width: '300px', height: '350px'}}>
                    <SingleSkillTable/>
                </div>

                <div style={{position: 'absolute', top: '490px', left: '350px', width: '300px', height: '350px'}}>
                    <SingleSkillTable/>
                </div>

                <div style={{position: 'absolute', top: '490px', left: '700px', width: '300px', height: '350px'}}>
                    <SingleSkillTable/>
                </div>
                
                <div style={{position: 'absolute', top: '850px', width: '300px', height: '350px'}}>
                    <SingleSkillTable/>
                </div>

                <div style={{position: 'absolute', top: '850px', left: '350px', width: '300px', height: '350px'}}>
                    <SingleSkillTable/>
                </div>

                <div style={{position: 'absolute', top: '850px', left: '700px', width: '300px', height: '350px'}}>
                    <SingleSkillTable/>
                </div>
            </div>
        </Container>
    );
}