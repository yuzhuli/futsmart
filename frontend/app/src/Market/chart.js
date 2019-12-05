import React from 'react';
import {Line} from 'react-chartjs-2';


export const IndexLineChart = ({indices, chartType}) => {
  const data_template = {
    labels: [],
    datasets: [
      {
        label: 'Market Index',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 10,
        data: []
      }
    ], 
  };

const options_template = {
  scales: {
    xAxes: [{
      ticks: {
        maxTicksLimit: 0,
      }
    }]
  },
  legend: {
    display: false,
  },
};

  indices.forEach(element => {
    data_template.labels.push(element['timestamp']);
    data_template.datasets[0].data.push(element['index_value']);
  });
  if (chartType === 'sevenDays') {
    options_template.scales.xAxes[0].ticks.maxTicksLimit = 14;
  } 
  if (chartType === 'all') {
    options_template.scales.xAxes[0].ticks.maxTicksLimit = 24;
  }

  return (
    <div>
      <Line data={data_template} options={options_template}/>
    </div>
  );
};
