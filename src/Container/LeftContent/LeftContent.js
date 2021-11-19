import React, { useState } from 'react'
import LeftContentTop from './LeftContentTop'
import LeftContentBottom from './LeftContentBottom'
import AddNewRun from './AddNewRun'
import AddNewGoal from './AddNewGoal'
import './LeftContent.scss'

const LeftContent = ({ distance, calories, time, addDistance }) => {
	const [showNewRun, setShowNewRun] = useState(true) 
	const [showNewGoal, setShowNewGoal] = useState(true) 

	const openCloseNewRun = () => {
		setShowNewRun(!showNewRun)
	}

	const openCloseNewGoal = () => {
		setShowNewGoal(!showNewGoal)
	}


	return (
		<div className="leftContent-container">
			{showNewRun ? 
				<LeftContentTop 
					openNewRun={openCloseNewRun} 
					distance={distance} 
					calories={calories} 
					time={time}/> 
				: 
				<AddNewRun 
					closeNewRun={openCloseNewRun} 
					addDistance={addDistance}
					/>}
			{showNewGoal ? 
				<LeftContentBottom 
					openNewGoal={openCloseNewGoal}/> 
				: 
				<AddNewGoal 
					closeNewGoal={openCloseNewGoal}/>}
		</div>
	)
}

export default LeftContent