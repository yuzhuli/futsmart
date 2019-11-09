import React from 'react';
import {Figure, Button} from 'react-bootstrap';

export const MyFigure = ({player}) => {
    return (
        <Figure>
            <Figure.Image
                width={171}
                height={180}
                alt={player.name} 
                src={player.image} 
                roundedCircle
                onClick={() => console.log("clicked")}
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
    );
};