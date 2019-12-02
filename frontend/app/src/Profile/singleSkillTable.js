import React from 'react';
import { Table } from 'react-bootstrap';

export const SingleSkillTable = () => {
    // const skill = {'PACE':
    //     [ 
    //         {'Acceleration': 70},
    //         {'Sprint Spped': 76}
    //     ],
    // }
    // const skillName = Object.keys(skill)[0];
    // const subSkills = Object.values(skill)[0];
    const subSkills = [['Positioning', 70], ['Finishing', 76], ['Shot Power', 55], ['Long Shot', 33], ['Volleys', 32], ['Penalties', 36]]

    return (
        <Table>
            <thead>
                <tr>
                    <th colSpan='2'>SHOOTING</th>
                    <th>73</th>
                </tr>
            </thead>
            <tbody>
                { 
                subSkills.map(subSkill => {
                    return (
                        <tr>
                            <td colSpan='2'>{subSkill[0]}</td>
                            <td>{subSkill[1]}</td>
                        </tr>
                    );
                })
                }
            </tbody>
        </Table>
    );
}