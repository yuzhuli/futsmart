import React from 'react';
import {SingleSkillTable} from './singleSkillTable';



export const SkillTablesSection = ({player, skillDetailLabels}) => {
    const skillNames = Object.keys(skillDetailLabels);

    return (
        <div>
            <div style={{position: 'absolute', top: '490px', width: '300px', height: '350px'}}>
                <SingleSkillTable skillName={skillNames[0]} subSkills={skillDetailLabels[skillNames[0]]} player={player}/>
            </div>

            <div style={{position: 'absolute', top: '490px', left: '350px', width: '300px', height: '350px'}}>
                <SingleSkillTable skillName={skillNames[1]} subSkills={skillDetailLabels[skillNames[1]]} player={player}/>
            </div>

            <div style={{position: 'absolute', top: '490px', left: '700px', width: '300px', height: '350px'}}>
                <SingleSkillTable skillName={skillNames[2]} subSkills={skillDetailLabels[skillNames[2]]} player={player}/>
            </div>
            
            <div style={{position: 'absolute', top: '850px', width: '300px', height: '350px'}}>
                <SingleSkillTable skillName={skillNames[3]} subSkills={skillDetailLabels[skillNames[3]]} player={player}/>
            </div>

            <div style={{position: 'absolute', top: '850px', left: '350px', width: '300px', height: '350px'}}>
                <SingleSkillTable skillName={skillNames[4]} subSkills={skillDetailLabels[skillNames[4]]} player={player}/>
            </div>

            <div style={{position: 'absolute', top: '850px', left: '700px', width: '300px', height: '350px'}}>
                <SingleSkillTable skillName={skillNames[5]} subSkills={skillDetailLabels[skillNames[5]]} player={player}/>
            </div>
        </div>
    );
};