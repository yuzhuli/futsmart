import React from 'react';
import {SingleSkillTable} from './singleSkillTable';



export const SkillTablesSection = ({player, skills}) => {
    return (
        <div>
            <div style={{position: 'absolute', top: '490px', width: '300px', height: '350px'}}>
                <SingleSkillTable skillName="pace" skillRating={player.main_pace} subSkills={skills.pace} player={player}/>
            </div>

            <div style={{position: 'absolute', top: '490px', left: '350px', width: '300px', height: '350px'}}>
                <SingleSkillTable skillName="shooting" skillRating={player.main_shooting} subSkills={skills.shooting} player={player}/>
            </div>

            <div style={{position: 'absolute', top: '490px', left: '700px', width: '300px', height: '350px'}}>
                <SingleSkillTable skillName="passing" skillRating={player.main_passing} subSkills={skills.passing} player={player}/>
            </div>
            
            <div style={{position: 'absolute', top: '850px', width: '300px', height: '350px'}}>
                <SingleSkillTable skillName="dribbling" skillRating={player.main_dribbling} subSkills={skills.dribbling} player={player}/>
            </div>

            <div style={{position: 'absolute', top: '850px', left: '350px', width: '300px', height: '350px'}}>
                <SingleSkillTable skillName="defending" skillRating={player.main_defending} subSkills={skills.defending} player={player}/>
            </div>

            <div style={{position: 'absolute', top: '850px', left: '700px', width: '300px', height: '350px'}}>
                <SingleSkillTable skillName="physicality" skillRating={player.main_physicality} subSkills={skills.physicality} player={player}/>
            </div>
        </div>
    );
};