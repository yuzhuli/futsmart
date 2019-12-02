import React, { useState } from 'react';
import { MyBadge } from './badge';
import { Container, Col, Row } from 'react-bootstrap';
import { RadarChart } from './radarChart';



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
        <div style={{width: '660px', height: '450', position: 'relative', top: '10px', left: '10px'}}>
            {/* { !isLoading && */}
                <Row>
                    <Col key={player.Name+"profileBadge"}>
                        <MyBadge playerType="Gold" player={player} isLoading={false} lastName="Messi"/>
                    </Col>
                    <Col key={player.Name+"profileRadar"}>
                        <RadarChart player={player}></RadarChart>
                    </Col>
                </Row>
                <RadarChart player={player}></RadarChart>
            {/* } */}
        </div>
    );
}