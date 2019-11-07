import React from 'react';
import {Figure} from 'react-bootstrap';

export const MyFigure = ({player}) => {
    return (
        <Figure>
        <Figure.Image
            width={171}
            height={180}
            alt="pikachu" 
            src={player.image} 
            roundedCircle
            onClick={() => console.log("clicked")}
            style={{cursor: "pointer"}}
        />
        <Figure.Caption>
            {player.description}
        </Figure.Caption>
        </Figure>
    );
};