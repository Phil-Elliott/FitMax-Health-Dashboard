const LeftContentTop = ({ openNewRun, distance, calories, time }) => {
	return (
		<div className='leftContentTop-container'>
			<div className="top-header">
				<h1>Running</h1>
			</div>
			<section className="nav-container">
				<nav className="options">
			  		<p style={{borderRadius: '50px 0 0 50px'}}>Daily</p>
			  		<p>Weekly</p>
			  		<p style={{borderRadius: '0 50px 50px 0'}}>Monthly</p>
			  	</nav>
			  		<p className="new" onClick={openNewRun}>New Run</p>
			</section>
			<div>
				<p><strong>Distance</strong></p>
				<p>{distance} Miles</p>
			</div>
			<div>
				<p><strong>Calories</strong></p>
				<p>{Number(distance) * Number(100)}</p>
			</div>
			<div>
				<p><strong>Average Speed</strong></p>
				<p>{((time + 0) / (distance + .0001)).toFixed(2)} Mins Per Mile</p>
			</div>
		</div>
	)
}

export default LeftContentTop