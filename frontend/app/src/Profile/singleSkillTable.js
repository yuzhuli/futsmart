import React from 'react';
import { Table } from 'react-bootstrap';

export const SingleSkillTable = () => {
    const totalScore = 60;
    const subSkills = [['Positioning', 70], ['Finishing', 76], ['Shot Power', 55], ['Long Shot', 33], ['Volleys', 32], ['Penalties', 36]];
    let themeColor = 'white';
    if (totalScore <=60) {
        themeColor = '#bd2f2f';
    } else if (totalScore <= 70) {
        themeColor = '#c8790a';
    } else if (totalScore <= 80) {
        themeColor = '#e8b415';
    } else {
        themeColor = '#99cf46';
    }

    return (
        <Table borderless>
            <thead>
                <tr style={{color: themeColor, fontWeight: 500, fontSize: '16px', fontFamily: 'sans-serif !important'}}>
                    <th colSpan='2'>SHOOTING</th>
                    <th>73</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan='2'>
                        <div style={{position: 'relative', backgroundColor: 'lightGrey', width: '100%', height: '6px'}}>
                            <div style={{position: 'relative', backgroundColor: themeColor, width: totalScore.toString() +'%', height: '6px'}}/>
                        </div>
                    </td>
                </tr>
                {subSkills.map(subSkill => {
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