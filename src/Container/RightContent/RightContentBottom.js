const RightContentBottom = ({ runs }) => {
	const runDistance = runs.map(run => run.distanceNumber).slice(-3)
	const runDate = runs.map(run => run.date).slice(-3)
	const runSpeed = runs.map(run => run.lengthNumber).slice(-3)

	return (
		<div className="main-right-bottom">
			<div className="rightContentBottom-container">
				<h1 style={{ marginTop: '0' }}>Recent Activities</h1>
				{runDate[1] &&
					<div>
						<p>{runDate[2]}</p>
						<p>{runDistance[2]} Miles</p>
						<p>{runSpeed[2]} Mins</p>
					</div>
				}
				{runDate[1] &&
					<div>
						<p>{runDate[1]}</p>
						<p>{runDistance[1]} Miles</p>
						<p>{runSpeed[1]} Mins</p>
					</div>
				}
				{runDate[0] &&
					<div>
						<p>{runDate[0]}</p>
						<p>{runDistance[0]} Miles</p>
						<p>{runSpeed[0]} Mins</p>
					</div>
				}
			</div>
		</div>
	)
}

export default RightContentBottom