import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2';

const LeftContentBottom = ({ openNewGoal, distance, calories, time, distanceGoal, caloriesGoal, timeGoal }) => {


	const data = {
	  labels: [
	    'Complete',
	    'Goal',
	  ],
	  datasets: [{
	    label: 'My First Dataset',
	    data: [(distance), (distanceGoal - distance)],
	    backgroundColor: [
	      'grey',
	      'black',
	    ],
	    hoverOffset: 4
	  }]
	};

	return (
		<div className="leftContentBottom-container">
			<div className="nav-container">
				<nav className="options">
			  		<p style={{borderRadius: '50px 0 0 50px'}}>Distance</p>
			  		<p>Calories</p>
			  		<p style={{borderRadius: '0 50px 50px 0'}}>Speed</p>
			  	</nav>
			  	<div className="new-container">
			  		<p className="new" onClick={openNewGoal}>New Goal</p>
			  	</div>
		  	</div>
		  	<div className="bottom-left-content">
			  	<div className='graph'>
			  		<Doughnut data={data} />
			  	</div>
			  	<div className='details'>
			  		<p><strong>Progress</strong> - {distance} Miles</p>
			  		<p><strong>Goal</strong> - {distanceGoal} Miles</p>
			  		<p><strong>Complete</strong> - {distance/distanceGoal*100}%</p>
			  	</div>
		  	</div>
		</div>
	)
}

export default LeftContentBottom

