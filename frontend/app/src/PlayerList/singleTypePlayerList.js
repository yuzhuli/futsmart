import React from 'react';
import { Table } from 'react-bootstrap';

export const SingleTypePlayerList = ({priceType, players}) => {
    const headerColor = priceType === 'Up' ? '#99cf46' : '#bd2f2f';
    const trendSign = priceType === "Up" ? "+" : "-";

    return (
    <Table striped bordered hover>
        <thead>
            <tr style={{backgroundColor: headerColor, color: 'white'}}>
                <th colSpan="2">Top Price {priceType}</th>
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
                            <img src="https://i.imgur.com/obecPMW.png" style={{width: '30px', height: '25px'}}></img>
                            <span> </span>
                            <img src="https://i.imgur.com/Kc3ZyJ3.png" style={{width: '30px', height: '30px'}}></img>
                            <span> </span>
                            {player.Name} ({player.price})
                        </td>
                        {/* <td>
                            <img></img>
                        </td> */}
                        <td style={{color: headerColor}}>{trendSign} {rounded_percentage}</td>
                        </tr>
                    );
            })}
        </tbody>
    </Table>
    );
}