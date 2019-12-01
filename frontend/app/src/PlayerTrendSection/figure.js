import React from 'react';
import {Figure, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {MyBadge} from "../Profile/badge.js";

export const MyFigure = ({playerType, priceType, player, isLoading}) => {
    const trendSign = priceType === "Up" ? "+" : "-";

    return (
        <Link to='/profile'>
        <Figure>
            <MyBadge playerType={playerType} player={player} isLoading={isLoading}></MyBadge>
            {!isLoading &&
                <Figure.Caption style={{textAlign: "center"}}>
                    <Button variant="link" style={{color: "grey"}}>
                    <div style={{textTransform: 'uppercase'}}>{player.name} - ({player.price})</div>
                    <div>{trendSign} {player.percent}</div>
                    </Button>
                </Figure.Caption>
            }
        </Figure>
        </Link>
    );
};