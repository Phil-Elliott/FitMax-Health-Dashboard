import React from 'react'
import { Doughnut } from 'react-chartjs-2';

const Speed = ({ openNewGoal, distanceGoal, caloriesGoal, timeGoal, changePage, newTime, newDistance }) => {

	const data = {
	  labels: [
	    'Complete',
	    'Goal',
	  ],
	  datasets: [{
	    label: 'My First Dataset',
	    data: [(timeGoal/(newTime/newDistance)), ((timeGoal === 0) ? 0 : (1-(timeGoal/(newTime/newDistance))))],
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
			  		<p style={{borderRadius: '50px 0 0 50px'}} onClick={() => changePage('Distance')}>Distance</p>
			  		<p onClick={() => changePage('Calories')}>Calories</p>
			  		<p style={{borderRadius: '0 50px 50px 0', backgroundColor: '#ababaa'}} onClick={() => changePage('Speed')}>Speed</p>
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
			  		<p><strong>Progress</strong> - {newTime ? (newTime/newDistance).toFixed(2) : 0 } Min Mile</p>
			  		<p><strong>Goal</strong> - {timeGoal} Min Mile</p>
			  		<p><strong>Complete</strong> - {newTime ? (timeGoal/(newTime/newDistance)*100).toFixed(2) : 0}%</p>
			  	</div>
		  	</div>
		</div>
	)
}

export default Speed

