import React from 'react';
import { Table } from 'react-bootstrap';

export const SingleSkillTable = () => {
    const totalScore = 71;
    const subSkills = [['Positioning', 70], ['Finishing', 76], ['Shot Power', 55], ['Long Shot', 33], ['Volleys', 32], ['Penalties', 36]]
    let fontColor = 'white';
    if (totalScore <=60) {
        fontColor = '#bd2f2f';
    } else if (totalScore <= 70) {
        fontColor = '#c8790a';
    } else if (totalScore <= 80) {
        fontColor = '#e8b415';
    } else {
        fontColor = '#99cf46';
    }

    return (
        <Table>
            <thead>
                <tr style={{color: fontColor, fontWeight: 500, fontSize: '16px', fontFamily: 'sans-serif !important'}}>
                    <th colSpan='2'>SHOOTING</th>
                    <th>73</th>
                </tr>
            </thead>
            <tbody>
                { 
                subSkills.map(subSkill => {
                    return (
                        <tr style={{color: 'rgb(72, 72, 72)', fontSize: '15px', fontFamily: 'sans-serif !important'}}>
                            <td colSpan='2'>{subSkill[0]}</td>
                            <td >{subSkill[1]}</td>
                        </tr>
                    );
                })
                }
            </tbody>
        </Table>
    );
}