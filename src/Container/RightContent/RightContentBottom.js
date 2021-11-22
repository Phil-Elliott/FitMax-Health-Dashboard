import { FaTimes } from 'react-icons/fa'

const RightContentBottom = ({ runsOrdered, onDelete, change }) => {
	const runDistance = runsOrdered.map(run => run.distanceNumber)
	const runDate = runsOrdered.map(run => run.date)
	const runSpeed = runsOrdered.map(run => run.lengthNumber)

	return (
		<div className="main-right-bottom"> 
			<div className="rightContentBottom-container">
				<nav className='recent-header-container'>
					<h1 style={{ marginTop: '0' }}>Recent Activities</h1>
					<p className="new" onClick={change}>History</p>
				</nav>
				{runDate[0] &&
					<div>
						<p>{runDate[0]}</p>
						<p>{runDistance[0]} Miles</p>
						<p>{runSpeed[0]} Mins</p>
						<FaTimes 
							className = "delete"
							onClick={() => onDelete(runsOrdered[0].id)}
						/>
					</div>
				}
				{runDate[1] &&
					<div>
						<p>{runDate[1]}</p>
						<p>{runDistance[1]} Miles</p>
						<p>{runSpeed[1]} Mins</p>
						<FaTimes 
							className = "delete"
							onClick={() => onDelete(runsOrdered[1].id)}
						/>
					</div>
				}
				{runDate[2] &&
					<div>
						<p>{runDate[2]}</p>
						<p>{runDistance[2]} Miles</p>
						<p>{runSpeed[2]} Mins</p>
						<FaTimes 
							className = "delete"
							onClick={() => onDelete(runsOrdered[2].id)}
						/>
					</div>
				}
			</div>
		</div>
	)
}

export default RightContentBottom