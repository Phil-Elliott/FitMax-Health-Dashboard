const LeftContentTop = ({ openNewRun, distance, calories, time, changeData, newArray, newTime, newDistance }) => {

	return (
		<div className='leftContentTop-container'>
			<div className="top-header">
				<h1>Running</h1>
			</div>
			<section className="nav-container">
				<nav className="options">
			  		<p onClick={() => changeData('Daily')} style={{borderRadius: '50px 0 0 50px'}}>Daily</p>
			  		<p onClick={() => changeData('Weekly')}>Weekly</p>
			  		<p onClick={() => changeData('Monthly')}>Monthly</p>
			  		<p onClick={() => changeData('Total')} style={{borderRadius: '0 50px 50px 0'}}>Total</p>
			  	</nav>
			  		<p className="new" onClick={openNewRun}>New Run</p>
			</section>
			<div>
				<p><strong>Distance</strong></p>
				<p>{newDistance ? newDistance : 0 } Miles</p>
			</div>
			<div>
				<p><strong>Calories</strong></p>
				<p>{newDistance ? (Number(newDistance) * Number(100)) : 0 }</p>
			</div>
			<div>
				<p><strong>Average Speed</strong></p>
				<p>{newDistance ? ((newTime + 0) / (newDistance + .0001)).toFixed(2) : 0 } Mins Per Mile</p>
			</div>
		</div>
	)
}

export default LeftContentTop