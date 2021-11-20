import React, { useState } from 'react'
import LeftContentTop from './LeftContentTop'
import LeftContentBottom from './LeftContentBottom/LeftContentBottom'
import AddNewRun from './AddNewRun'
import AddNewGoal from './AddNewGoal'
import './LeftContent.scss'

const LeftContent = ({ distance, distanceGoal, calories, caloriesGoal, time, timeGoal, addDistance, addGoal, addRun }) => {
	const [showNewRun, setShowNewRun] = useState(true) 
	const [showNewGoal, setShowNewGoal] = useState(true) 
	const [changeNumbers, setChangeNumbers] = useState('Daily')
	const [newDistance, setNewDistance] = useState('')

	const openCloseNewRun = () => {
		setShowNewRun(!showNewRun)
	}

	const openCloseNewGoal = () => {
		setShowNewGoal(!showNewGoal)
	}

	const changeData = (e) => {
		setChangeNumbers(e)
		const changeDistance = () => {
			if (changeNumbers === 'Daily') {
				console.log('1')
			} else if (changeNumbers === 'Weekly') {
				console.log('2')
			} else {
				console.log('3')
			}
		}

		changeDistance()
	}

	return (
		<div className="leftContent-container">
			{showNewRun ? 
				<LeftContentTop 
					openNewRun={openCloseNewRun} 
					distance={distance} 
					calories={calories} 
					time={time}
					changeData={changeData}
				/> 
				: 
				<AddNewRun 
					closeNewRun={openCloseNewRun} 
					addDistance={addDistance}
					addRun={addRun}
					/>}
			{showNewGoal ? 
				<LeftContentBottom 
					openNewGoal={openCloseNewGoal}
					distance={distance} 
					calories={calories} 
					time={time}
					distanceGoal={distanceGoal} 
					caloriesGoal={caloriesGoal} 
					timeGoal={timeGoal}
				/> 
				: 
				<AddNewGoal 
					closeNewGoal={openCloseNewGoal}
					addGoal={addGoal}
				/>}
		</div>
	)
}

export default LeftContent