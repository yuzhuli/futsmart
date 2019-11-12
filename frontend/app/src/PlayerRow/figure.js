import React from 'react';
import {Figure, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const MyFigure = ({player}) => {
    return (
        <Link to='/profile'>
        <Figure>
            <Figure.Image
                width={171}
                height={180}
                alt={player.name} 
                src={player.image} 
                rounded
                style={{cursor: "pointer"}}
            />
            <Figure.Caption style={{textAlign: "center"}}>
                <Button variant="link" style={{color: "grey"}}>
                <div>{player.name}</div>
                <div>{player.price}</div>
                <div>{player.percent}</div>
                </Button>
            </Figure.Caption>
        </Figure>
        </Link>
    );
};