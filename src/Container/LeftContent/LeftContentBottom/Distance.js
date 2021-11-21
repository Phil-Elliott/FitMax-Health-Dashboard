import React from 'react'
import { Doughnut } from 'react-chartjs-2';

const Distance = ({ openNewGoal, distanceGoal, caloriesGoal, timeGoal, changePage, newDistance }) => {

	const data = {
	  labels: [
	    'Complete',
	    'Goal',
	  ],
	  datasets: [{
	    label: 'My First Dataset',
	    data: [(newDistance), ((distanceGoal === 0) ? 0 : (distanceGoal - newDistance))],
	    backgroundColor: [
	      '#b20a08',
	      'black',
	    ],
	    hoverOffset: 4
	  }]
	};

	return (
		<div className="leftContentBottom-container">
			<div className="nav-container">
				<nav className="options">
			  		<p style={{borderRadius: '50px 0 0 50px', backgroundColor: '#ababaa'}} onClick={() => changePage('Distance')}>Distance</p>
			  		<p onClick={() => changePage('Calories')}>Calories</p>
			  		<p style={{borderRadius: '0 50px 50px 0'}} onClick={() => changePage('Speed')}>Speed</p>
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
			  		<p><strong>Progress</strong> - {(newDistance) ? newDistance : Number(0)} Miles</p>
			  		<p><strong>Goal</strong> - {distanceGoal} Miles</p>
			  		<p><strong>Complete</strong> - {((distanceGoal === 0) ? 0 : newDistance/distanceGoal*100).toFixed(2)}%</p>
			  	</div>
		  	</div>
		</div>
	)
}

export default Distance

