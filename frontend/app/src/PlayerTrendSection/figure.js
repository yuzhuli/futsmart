import React from 'react';
import {Figure, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {MyBadge} from "../Profile/badge.js";

export const MyFigure = ({player}) => {
    return (
        <Link to='/profile'>
        <Figure>
            {/* <Figure.Image
                width={171}
                height={180}
                alt={player.name} 
                src={player.image} 
                rounded
                style={{cursor: "pointer"}}
            /> */}
            <MyBadge player={player}></MyBadge>
            <Figure.Caption style={{textAlign: "center"}}>
                <Button variant="link" style={{color: "grey"}}>
                <div style={{textTransform: 'uppercase'}}>{player.name} - ({player.price})</div>
                {/* <div>{player.price}</div> */}
                <div>+{player.percent}</div>
                </Button>
            </Figure.Caption>
        </Figure>
        </Link>
    );
};