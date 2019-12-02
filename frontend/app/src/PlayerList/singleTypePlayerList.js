import React from 'react';
import { Table } from 'react-bootstrap';

export const SingleTypePlayerList = ({priceType, players}) => {
    const headerColor = priceType === 'Up' ? '#008000' : '#DC143C';
    const trendSign = priceType === "Up" ? "+" : "-";

    return (
    <Table striped bordered hover>
        <thead>
            <tr style={{backgroundColor: headerColor, color: 'white'}}>
                <th colSpan="2">Top 20 - Price {priceType}</th>
                <th>Percentage</th>
            </tr>
        </thead>
        <tbody>
            {
                players.map(player => {
                    const percentage = Math.abs(player.price_diff_percentage) * 100;
                    const rounded_percentage = percentage.toFixed(2) + "%";
                    return (
                        <tr>
                        <td colSpan="2">
                            <img src="https://i.imgur.com/ebHLKjb.png" style={{width: '40px', height: '40px'}}></img>
                            {player.Name} ({player.price})
                        </td>
                        <td style={{color: headerColor}}>{rounded_percentage}</td>
                        </tr>
                    );
            })}
        </tbody>
    </Table>
    );
}