import React from 'react';
import {Radar} from 'react-chartjs-2';


export const RadarChart = ({player, skillNames}) => {

    const data = {
    labels: [],
    datasets: [
        {
        label: 'Score',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: []
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

    skillNames.forEach(skillName => {
      const skillNameUsedInObject = 'main_' + skillName;
      data.labels.push(skillName.toUpperCase());
      data.datasets[0].data.push(player[skillNameUsedInObject]);
    });

    return (
      <div>
        <Radar data={data} options={options_template}/>
      </div>
    );
};