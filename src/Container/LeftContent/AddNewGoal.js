const AddNewGoal = ({ closeNewGoal }) => {
	return (
		<div style={{height:'47vh'}} className='leftContentTop-container'>
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
					/>
				</div>
				<div className='form-control'>
					<label><strong>Calories</strong></label>
					<input 
						type='number' 
						placeholder='Calories' 
					/>
				</div>
				<div className='form-control'>
					<label><strong>Speed</strong></label>
					<input 
						type='number' 
						placeholder='Average Mile' 
					/>
				</div>
				<input type='submit' value='Save Goal' className='btn btn-block' />
			</form>
		</div>
	)
}

export default AddNewGoal