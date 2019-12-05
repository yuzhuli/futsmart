import React from 'react';
import {Figure, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {MyBadge} from "../Profile/badge.js";

export const MyFigure = ({playerType, priceType, player, isLoading}) => {
    const trendSign = priceType === "Up" ? "+" : "-";
    // const textColor = priceType === 'Up' ? '#99cf46' : '#bd2f2f';

    return (
        <Link to={`/profile/${player['id']}`}>
        <Figure>
            <MyBadge playerType={playerType} player={player} isLoading={isLoading} lastName={player['last_name']}></MyBadge>
                <Figure.Caption style={{textAlign: "center"}}>
                    <Button variant="link" style={{fontFamily: 'sans-serif !important', color: 'rgb(72, 72, 72)'}}>
                    <div style={{textTransform: 'uppercase'}}>{player['last_name']}</div>
                    <div>Price: {player['price']}</div>
                    <div>{trendSign} {player['price_diff_percentage']}</div>
                    </Button>
                </Figure.Caption>
        </Figure>
        </Link>
    );
};

