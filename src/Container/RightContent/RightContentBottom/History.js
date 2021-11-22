import Run from './Run'

const History = ({ runsOrdered, onDelete, change }) => {

	//Maps through each run and displays the data with the ability to delete
	return (
		<div className="main-right-bottom"> 
			<div className="rightContentBottom-container">
				<nav className='recent-header-container'>
					<h1 style={{ marginTop: '0' }}>Activities</h1>
					<p className="new" onClick={change}>Recent</p>
				</nav>
				<section style={{height:"27vh", overflowY:'scroll'}}>
					{
			    		runsOrdered.map((user, i) => {
							return (
								<Run 
									id={runsOrdered[i].id} 
									runDate={runsOrdered[i].date} 
									runDistance={runsOrdered[i].distanceNumber}
									runSpeed={runsOrdered[i].lengthNumber}
									onDelete={onDelete}
								/>
							)
						})
			    	}
		    	</section>
			</div>
		</div>
	)
}

export default History