import React from 'react';
import {SingleSkillTable} from './singleSkillTable';

export const SkillTablesSection = ({player}) => {
    return (
        <div>
            <div style={{position: 'absolute', top: '490px', width: '300px', height: '350px'}}>
                <SingleSkillTable skillName="pace" skillRating={player.main_pace} subSkills={player.pace_details}/>
            </div>

            <div style={{position: 'absolute', top: '490px', left: '350px', width: '300px', height: '350px'}}>
                <SingleSkillTable skillName="shooting" skillRating={player.main_shooting} subSkills={player.shooting_details}/>
            </div>

            <div style={{position: 'absolute', top: '490px', left: '700px', width: '300px', height: '350px'}}>
                <SingleSkillTable skillName="passing" skillRating={player.main_passing} subSkills={player.passing_details}/>
            </div>
            
            <div style={{position: 'absolute', top: '850px', width: '300px', height: '350px'}}>
                <SingleSkillTable skillName="dribbling" skillRating={player.main_dribbling} subSkills={player.dribbling_details}/>
            </div>

            <div style={{position: 'absolute', top: '850px', left: '350px', width: '300px', height: '350px'}}>
                <SingleSkillTable skillName="defending" skillRating={player.main_defending} subSkills={player.defending_details}/>
            </div>

            <div style={{position: 'absolute', top: '850px', left: '700px', width: '300px', height: '350px'}}>
                <SingleSkillTable skillName="physicality" skillRating={player.main_physicality} subSkills={player.physicality_details}/>
            </div>
        </div>
    );
};