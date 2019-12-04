import React from 'react';
import {Figure, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {MyBadge} from "../Profile/badge.js";

export const MyFigure = ({playerType, priceType, player, isLoading}) => {
    const trendSign = priceType === "Up" ? "+" : "-";

    return (
        <Link to='/profile/1234'>
        <Figure>
            <MyBadge playerType={playerType} player={player} isLoading={isLoading} lastName={player['last_name']}></MyBadge>
            {!isLoading &&
                <Figure.Caption style={{textAlign: "center"}}>
                    <Button variant="link" style={{color: "grey"}}>
                    <div style={{textTransform: 'uppercase'}}>{player['last_name']}</div>
                    <div>Price: {player['price']}</div>
                    <div>{trendSign} {player['price_diff_percentage']}</div>
                    </Button>
                </Figure.Caption>
            }
        </Figure>
        </Link>
    );
};