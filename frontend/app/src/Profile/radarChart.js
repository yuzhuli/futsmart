import React from 'react';
import {Radar} from 'react-chartjs-2';


export const RadarChart = ({player}) => {
    const skills = ["main_pace", "main_shooting", "main_passing", "main_dribbling", "main_defending", "main_physicality"];

    const data = {
    labels: ['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],
    datasets: [
        {
        label: 'Score',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [70, 60, 80, 50, 30, 40]
        },
    ]
    };

    const options_template = {
        scale: {
            ticks: {
                min: 20,
                max: 100
            }
        },
        legend: {
          display: false,
        },
      };

    for (let i = 0; i < skills.length; i ++) {
      data.datasets[0].data[i] = player[skills[i]];
    }

    return (
      <div>
        <Radar data={data} options={options_template}/>
      </div>
    );
};