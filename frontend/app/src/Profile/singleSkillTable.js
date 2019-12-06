import React from 'react';
import { Table } from 'react-bootstrap';

export const SingleSkillTable = ({skillName, skillRating, subSkills, player}) => {
    let themeColor = 'white';
    if (skillRating <=60) {
        themeColor = '#bd2f2f';
    } else if (skillRating <= 70) {
        themeColor = '#c8790a';
    } else if (skillRating <= 80) {
        themeColor = '#e8b415';
    } else {
        themeColor = '#99cf46';
    }

    return (
        <Table borderless>
            <thead>
                <tr style={{color: themeColor, fontWeight: 500, fontSize: '16px', fontFamily: 'sans-serif !important', textTransform: 'uppercase'}}>
                    <th colSpan='2'>{skillName}</th>
                    <th>{skillRating}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan='2'>
                        <div style={{position: 'relative', backgroundColor: 'lightGrey', width: '100%', height: '6px'}}>
                            <div style={{position: 'relative', backgroundColor: themeColor, width: skillRating.toString() +'%', height: '6px'}}/>
                        </div>
                    </td>
                </tr>
                {subSkills.map(subSkill => {
                    return (
                        <tr key={subSkill[0]} style={{color: 'rgb(72, 72, 72)', fontSize: '15px', fontFamily: 'sans-serif !important'}}>
                            <td colSpan='2'>{subSkill[1]}</td>
                            <td >{player[subSkill[0]]}</td>
                        </tr>
                    );
                })
                }
            </tbody>
        </Table>
    );
}