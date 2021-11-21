import React, { useState } from 'react'

const LeftContentTop = ({ openNewRun, distance, calories, time, changeData, newArray, newTime, newDistance }) => {
	const [active, setActive] = useState('daily')
	const handleToggle = (name) => {
		setActive(name)
	}


	return (
		<div className='leftContentTop-container'>
			<div className="top-header">
				<h1>Running</h1>
			</div>
			<section className="nav-container">
				<nav className="options">
					<span onClick={() => handleToggle('daily')}>
						<p className={(active === 'daily') ? "active" : "none"} onClick={() => changeData('Daily')} style={{borderRadius: '50px 0 0 50px'}}>Daily</p>
					</span>
					<span onClick={() => handleToggle('weekly')}>
						<p className={(active === 'weekly') ? "active" : "none"} onClick={() => changeData('Weekly')}>Weekly</p>
					</span>
			  		<span onClick={() => handleToggle('monthly')}>
			  			<p className={(active === 'monthly') ? "active" : "none"} onClick={() => changeData('Monthly')}>Monthly</p>
			  		</span>
			  		<span onClick={() => handleToggle('total')}>
			  			<p className={(active === 'total') ? "active" : "none"} onClick={() => changeData('Total')} style={{borderRadius: '0 50px 50px 0'}}>Total</p>
			  		</span>
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