import React from 'react';
import {Figure, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {MyBadge} from "../Profile/badge.js";

export const MyFigure = ({playerType, priceType, player, isLoading}) => {
    const trendSign = priceType === "Up" ? "+" : "-";
    const nameArr = player['Name'].split(' ');
    const lastName = nameArr[nameArr.length - 1];
    const percentage = Math.abs(player['price_diff_percentage']) * 100;
    const rounded_percentage = percentage.toFixed(2) + "%";
    // Math.round(player['price_diff_percentage'] * 100)

    return (
        <Link to='/profile'>
        <Figure>
            <MyBadge playerType={playerType} player={player} isLoading={isLoading} lastName={lastName}></MyBadge>
            {!isLoading &&
                <Figure.Caption href={"/profile/1234"} style={{textAlign: "center"}}>
                    <Button variant="link" style={{color: "grey"}}>
                    <div style={{textTransform: 'uppercase'}}>{lastName}</div>
                    <div>Price: {player['price']}</div>
                    <div>{trendSign} {rounded_percentage}</div>
                    </Button>
                </Figure.Caption>
            }
        </Figure>
        </Link>
    );
};