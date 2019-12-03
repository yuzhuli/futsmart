import React from 'react';
import {Line} from 'react-chartjs-2';

function convert_to_date(seconds) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const date = new Date(seconds * 1000);
  const month = months[date.getMonth()];
  const day = date.getDate();
  const result = month + ' ' + day.toString();
  return result
}

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
  }
};

  indices.forEach(element => {
    const date = convert_to_date(element['timestamp']);
    data_template.labels.push(date);
    const rounded_index_value = parseFloat(element['index_value'].toFixed(2));
    data_template.datasets[0].data.push(rounded_index_value);
  });
  // console.log(data_template.labels);
  if (chartType === 'sevenDays') {
    options_template.scales.xAxes[0].ticks.maxTicksLimit = 14;
  } 
  if (chartType === 'all') {
    options_template.scales.xAxes[0].ticks.maxTicksLimit = 20;
  }

  return (
    <div>
      {/* <h2>Line Example</h2> */}
      <Line data={data_template} options={options_template}/>
    </div>
  );
};
