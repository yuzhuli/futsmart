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
        />
        <Figure.Caption>
            {player.description}
        </Figure.Caption>
        </Figure>
    );
};