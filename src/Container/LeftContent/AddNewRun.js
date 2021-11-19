import React, { useState } from 'react'

const AddNewRun = ({ closeNewRun, addDistance }) => {
	const [distanceNumber, setDistanceNumber] = useState('')
	const [lengthNumber, setlengthNumber] = useState('')
	const [date, setDate] = useState('')

	const onSubmit = (e) => { 
		e.preventDefault()

		if (!distanceNumber) {
			alert('Please add distance')
			return
		}

		addDistance(distanceNumber, lengthNumber)

		console.log(date)

		closeNewRun()
	}


	return (
		<div className='leftContentTop-container' onSubmit={onSubmit}>
			<div>
				<h1 style={{ margin: '0' }}>Add Run</h1>
				<div className="close-container">
					<p className="close" onClick={closeNewRun}>Close</p>
				</div>
			</div>
			<form>
				<div className='form-control'>
					<label><strong>Date</strong></label>
					<input 
						type='date'
						value={date} 
						onChange={(e) => setDate(e.target.value)}  
					/>
				</div>
				<div className='form-control'>
					<label><strong>Distance (Miles)</strong></label>
					<input 
						type='number'
						step="any" 
						placeholder='How far did you run?' 
						value={distanceNumber} 
						onChange={(e) => setDistanceNumber(e.target.value)} 
					/>
				</div>
				<div className='form-control'>
					<label><strong>Length (Mins)</strong></label>
					<input 
						type='number' 
						step="any" 
						placeholder='How long was your run?'
						value={lengthNumber} 
						onChange={(e) => setlengthNumber(e.target.value)}  
					/>
				</div>
				<input type='submit' value='Save Run' className='btn btn-block' />
			</form>
		</div>
	)
}

export default AddNewRun