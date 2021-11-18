const AddNewRun = ({ closeNewRun }) => {
	return (
		<div className='leftContentTop-container'>
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
					/>
				</div>
				<div className='form-control'>
					<label><strong>Distance</strong></label>
					<input 
						type='number' 
						placeholder='Distance' 
					/>
				</div>
				<div className='form-control'>
					<label><strong>Description</strong></label>
					<input 
						type='text' 
						placeholder='How was your run?' 
					/>
				</div>
				<input type='submit' value='Save Run' className='btn btn-block' />
			</form>
		</div>
	)
}

export default AddNewRun