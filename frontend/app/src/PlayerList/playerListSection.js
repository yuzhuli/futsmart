import React, { useState, useEffect } from 'react';
import {SingleTypePlayerList} from './singleTypePlayerList';
import { Container, Row, Col } from 'react-bootstrap';

export const PlayerListSection = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [increasingPlayers, setIncreasingPlayers] = useState([]);
    const [decreasingPlayers, setDecreasingPlayers] = useState([]);
    const type = props.match.params.type === 'gold' ? 'Gold' :  'Icon';


    useEffect(() => {
        fetch("http://localhost:3001/trendy_players")
        .then((response) => response.json())
        .then((data) => {
            if (props.match.params.type === 'Gold') {
                setIncreasingPlayers(data['top_increasing_gold']);
                setDecreasingPlayers(data['top_decreasing_gold']);
                setIsLoading(false);
            } 
            if (props.match.params.type === 'Icon') {
                setIncreasingPlayers(data['top_increasing_icon']);
                setDecreasingPlayers(data['top_decreasing_icon']);
                setIsLoading(false);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, [increasingPlayers, decreasingPlayers, isLoading, props]);

    return (
        <Container>
        <h1>{type} Player List</h1>
        <Row>
            <Col key="up">
                {!isLoading &&
                <SingleTypePlayerList priceType="Up" players={increasingPlayers}></SingleTypePlayerList>
                }
            </Col>
            <Col key="down">
                {!isLoading &&
                <SingleTypePlayerList priceType="Down" players={decreasingPlayers}></SingleTypePlayerList>
                }
            </Col>
        </Row>
        </Container>
    );
}