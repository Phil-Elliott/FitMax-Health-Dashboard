import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'Febuary', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Miles',
      data: [47.3, 87.8, 103.4, 97.3, 109.6, 143.9],
      fill: true,
      backgroundColor: '#506678',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const RightContentTop = () => (
  <div className="main-right-top-container">
    <div className="right-top-container">
    	<div className="options right-top-options">
    		<p style={{borderRadius: '50px 0 0 50px'}}>Distance</p>
    		<p style={{backgroundColor: 'grey'}}>Calories</p>
    		<p style={{borderRadius: '0 50px 50px 0'}}>Speed</p>
    	</div>
      <div className="top-right-graph">
        <Line className='graph' data={data} options={options} />
      </div>
    </div>
  </div>
);

export default RightContentTop;