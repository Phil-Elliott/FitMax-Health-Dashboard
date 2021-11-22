import React, { useState, useEffect } from 'react'
import RightContentTop from './RightContentTop/RightContentTop'
import RightContentBottom from './RightContentBottom'
import History from './History'
import './RightContent.scss'

const RightContent = ({ runs, onDelete }) => {
	const [runsOrdered, setRunsOrdered] = useState([])
	const [changePage, setChangePage] = useState(true)

	useEffect(() => {
	  setRunsOrdered(runs.sort(function(a,b){
		  return new Date(b.date) - new Date(a.date);
		}))
	}, [runs]);

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