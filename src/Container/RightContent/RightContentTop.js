import React from 'react'
import { Line } from 'react-chartjs-2';

const RightContentTop = ({ runs }) => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
      {
        label: 'Miles',
        data: [1, 87.8, 103.4, 97.3, 109.6, 143.9, 180],
        fill: false,
        backgroundColor: '#b20a08',
        borderColor: 'rgba(255, 99, 132, 0.2)', 
      }
    ]
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="main-right-top-container">
      <div className="right-top-container">
      	<div className="options right-top-options">
      		<p style={{borderRadius: '50px 0 0 50px'}}>Distance</p>
      		<p>Calories</p>
      		<p style={{borderRadius: '0 50px 50px 0'}}>Speed</p>
      	</div>
        <div className="top-right-graph">
          <Line className='graph' data={data} options={options} />
        </div>
      </div>
    </div>
  )
}

export default RightContentTop;