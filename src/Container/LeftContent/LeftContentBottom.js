import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: [
    'Complete',
    'Goal',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50],
    backgroundColor: [
      'grey',
      'black',
    ],
    hoverOffset: 4
  }]
};

const LeftContentBottom = () => {
	return (
		<div className="leftContentBottom-container">
			<div className="nav-container">
				<nav className="options">
			  		<p style={{borderRadius: '50px 0 0 50px'}}>Distance</p>
			  		<p>Calories</p>
			  		<p style={{borderRadius: '0 50px 50px 0'}}>Speed</p>
			  	</nav>
			  	<div className="new-container">
			  		<p className="new">New Goal +</p>
			  	</div>
		  	</div>
		  	<div class="bottom-left-content">
			  	<div className='graph'>
			  		<Doughnut data={data} />
			  	</div>
			  	<div className='details'>
			  		<p><strong>Progress</strong> - 7 Miles</p>
			  		<p><strong>Goal</strong> - 21 Miles</p>
			  		<p><strong>Complete</strong> - 33.33%</p>
			  	</div>
		  	</div>
		</div>
	)
}

export default LeftContentBottom

/*
	<h1 style={{padding:'.7rem 0'}}>Goals</h1>
			<div>
				<p>Distance (Miles)</p>
				<p>100</p>
				<p>250</p>
			</div>
			<div>
				<p>Calories</p>
				<p>6532</p>
				<p>10000</p>
			</div>
			<div>
				<p>Average Speed (MPM)</p>
				<p>11.82</p>
				<p>8.43</p>
			</div>


*/