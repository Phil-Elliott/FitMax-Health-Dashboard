import React, { useState } from 'react'

const AddNewGoal = ({ closeNewGoal, addGoal }) => {
	const [distanceNumber, setDistanceNumber] = useState('')
	const [caloriesNumber, setCaloriesNumber] = useState('')
	const [timeNumber, setTimeNumber] = useState('')

	const onSubmit = (e) => {
		e.preventDefault()

		if (!distanceNumber) {
			alert('Please add distance')
			return
		} else if (!caloriesNumber) {
			alert('Please add calories')
			return
		} else if (!timeNumber) {
			alert('Please add speed')
			return
		}

		addGoal(distanceNumber, caloriesNumber, timeNumber)

		closeNewGoal()
	}

	return (
		<div style={{height:'47vh'}} className='leftContentTop-container' onSubmit={onSubmit}>
			<div>
				<h1 style={{ margin: '0' }}>Add Goal</h1>
				<div className="close-container">
					<p className="close" onClick={closeNewGoal}>Close</p>
				</div> 
			</div>
			<form>
				<div className='form-control'>
					<label><strong>Distance</strong></label>
					<input 
						type='number'
						placeholder='Distance' 
						value={distanceNumber} 
						onChange={(e) => setDistanceNumber(e.target.value)} 
					/>
				</div>
				<div className='form-control'>
					<label><strong>Calories</strong></label>
					<input 
						type='number' 
						placeholder='Calories' 
						value={caloriesNumber} 
						onChange={(e) => setCaloriesNumber(e.target.value)}
					/>
				</div>
				<div className='form-control'>
					<label><strong>Speed</strong></label>
					<input 
						type='number' 
						placeholder='Average Mile' 
						value={timeNumber} 
						onChange={(e) => setTimeNumber(e.target.value)} 
					/>
				</div>
				<input type='submit' value='Save Goal' className='btn btn-block' />
			</form>
		</div>
	)
}

export default AddNewGoal