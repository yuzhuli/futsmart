import React from 'react';
import {SingleSkillTable} from './singleSkillTable';

export const SkillTablesSection = () => {
    return (
        <div>
            <div style={{position: 'absolute', top: '490px', width: '300px', height: '350px'}}>
                <SingleSkillTable/>
            </div>

            <div style={{position: 'absolute', top: '490px', left: '350px', width: '300px', height: '350px'}}>
                <SingleSkillTable/>
            </div>

            <div style={{position: 'absolute', top: '490px', left: '700px', width: '300px', height: '350px'}}>
                <SingleSkillTable/>
            </div>
            
            <div style={{position: 'absolute', top: '850px', width: '300px', height: '350px'}}>
                <SingleSkillTable/>
            </div>

            <div style={{position: 'absolute', top: '850px', left: '350px', width: '300px', height: '350px'}}>
                <SingleSkillTable/>
            </div>

            <div style={{position: 'absolute', top: '850px', left: '700px', width: '300px', height: '350px'}}>
                <SingleSkillTable/>
            </div>
        </div>
    );
};