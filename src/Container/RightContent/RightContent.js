import React, { useState, useEffect } from 'react'
import RightContentTop from './RightContentTop/RightContentTop'
import RightContentBottom from './RightContentBottom/RightContentBottom'
import History from './RightContentBottom/History'
import './RightContent.scss'

const RightContent = ({ runs, onDelete }) => {
	const [runsOrdered, setRunsOrdered] = useState([])
	const [changePage, setChangePage] = useState(true)

	//Orders the runs array by date - everytime the run array changes
	useEffect(() => {
	  setRunsOrdered(runs.sort(function(a,b){
		  return new Date(b.date) - new Date(a.date);
		}))
	}, [runs]);

	//Changes the page of the bottom right container
	const change = () => {
		setChangePage(!changePage)
	}


	return (
		<div className="rightContent-container">
			<RightContentTop 
				runsOrdered={runsOrdered}
			/>
			{changePage ? 
				<RightContentBottom 
					runsOrdered={runsOrdered}
					onDelete={onDelete}
					change={change}
				/>
				:
				<History 
					runsOrdered={runsOrdered}
					onDelete={onDelete}
					change={change}
				/>
			}
		</div>
	)
}

export default RightContent