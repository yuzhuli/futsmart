import React, { useState, useEffect } from 'react';
import {SingleTypePlayerList} from './singleTypePlayerList';
import { checkPropTypes } from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

export const PlayerListSection = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [increasingPlayers, setIncreasingPlayers] = useState([]);
    const [decreasingPlayers, setDecreasingPlayers] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3001/trendy_players")
        .then((response) => response.json())
        .then((data) => {
            console.log('data:', data);
            if (props.match.params.type === 'gold') {
                setIncreasingPlayers(data['top_increasing_gold']);
                setDecreasingPlayers(data['top_decreasing_gold']);
                console.log(increasingPlayers);
                setIsLoading(false);
            } 
            if (props.match.params.type === 'icon') {
                setIncreasingPlayers(data['top_increasing_icon']);
                setDecreasingPlayers(data['top_decreasing_icon']);
                setIsLoading(false);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <Container>
        <h1>Player List</h1>
        <Row>
            <Col>
                {!isLoading &&
                <SingleTypePlayerList priceType="Up" players={increasingPlayers}></SingleTypePlayerList>
                }
            </Col>
            <Col>
                {!isLoading &&
                <SingleTypePlayerList priceType="Down" players={decreasingPlayers}></SingleTypePlayerList>
                }
            </Col>
        </Row>
        {/* <div style={{width: '600px'}}>
        {!isLoading &&
            <SingleTypePlayerList priceType="Up" players={increasingPlayers}></SingleTypePlayerList>
        }
        </div> */}
        </Container>
    );
}