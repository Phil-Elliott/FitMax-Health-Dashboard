import React, { useState, useEffect } from 'react'
import RightContentTop from './RightContentTop/RightContentTop'
import RightContentBottom from './RightContentBottom'
import './RightContent.scss'

const RightContent = ({ runs, onDelete }) => {
	const [runsOrdered, setRunsOrdered] = useState([])

	useEffect(() => {
	  setRunsOrdered(runs.sort(function(a,b){
		  return new Date(b.date) - new Date(a.date);
		}))

		console.log(runsOrdered)
	}, [runs]);


	return (
		<div className="rightContent-container">
			<RightContentTop 
				runsOrdered={runsOrdered}
			/>
			<RightContentBottom 
				runsOrdered={runsOrdered}
				onDelete={onDelete}
			/>
		</div>
	)
}

export default RightContent