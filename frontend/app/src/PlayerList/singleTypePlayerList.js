import React from 'react';
import { Table } from 'react-bootstrap';

export const SingleTypePlayerList = ({priceType, players}) => {
    const listColor = priceType === 'Up' ? '#99cf46' : '#bd2f2f';
    const trendSign = priceType === "Up" ? "+" : "-";

    return (
    <Table striped bordered hover>
        <thead>
            <tr style={{backgroundColor: listColor, color: 'white'}}>
                <th colSpan="2">Top Price {priceType}</th>
                <th>Percentage</th>
            </tr>
        </thead>
        <tbody>
            {
                players.map(player => {
                    return (
                        <tr>
                                <td colSpan="2">
                                    <img src="https://i.imgur.com/ebHLKjb.png" style={{width: '40px', height: '40px'}}></img>
                                    <img src="https://i.imgur.com/obecPMW.png" style={{width: '30px', height: '25px'}}></img>
                                    <span> </span>
                                    <img src="https://i.imgur.com/Kc3ZyJ3.png" style={{width: '30px', height: '30px'}}></img>
                                    <span> </span>
                                    <a href="/profile/1234" style={{color: 'rgb(72, 72, 72)'}}> {player['Name']} ({player['price']})</a>
                                </td>
                            
                            <td style={{color: listColor}}>{trendSign} {player['price_diff_percentage']}</td>
                        </tr>
                    );
            })}
        </tbody>
    </Table>
    );
}