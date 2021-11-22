import React from 'react'
import { Line } from 'react-chartjs-2';

const Calories = ({ runsOrdered, changePage }) => {
  const runData = runsOrdered.map(run => (run.distanceNumber * 100))

  const data = {
    labels: [...Array(32).keys()],
    datasets: [
      {
        label: 'Calories',
        data: (runData).slice(-30),
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
      		<p onClick={() => changePage('Distance')} style={{borderRadius: '50px 0 0 50px'}}>Distance</p>
          <p onClick={() => changePage('Calories')} style={{backgroundColor: '#ababaa'}}>Calories</p>
          <p onClick={() => changePage('Speed')} style={{borderRadius: '0 50px 50px 0'}}>Speed</p>
      	</div>
        <div className="top-right-graph">
          <Line className='graph' data={data} options={options} />
        </div>
      </div>
    </div>
  )
}

export default Calories;