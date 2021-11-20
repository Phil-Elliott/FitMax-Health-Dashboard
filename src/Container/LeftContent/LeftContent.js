import React, { useState } from 'react'
import LeftContentTop from './LeftContentTop'
import LeftContentBottom from './LeftContentBottom/LeftContentBottom'
import AddNewRun from './AddNewRun'
import AddNewGoal from './AddNewGoal'
import './LeftContent.scss'

const LeftContent = ({ distance, distanceGoal, calories, caloriesGoal, time, timeGoal, addDistance, addGoal, addRun, runs }) => {
	const [showNewRun, setShowNewRun] = useState(true) 
	const [showNewGoal, setShowNewGoal] = useState(true) 
	const [changeNumbers, setChangeNumbers] = useState('Daily')
	const [newArray, setNewArray] = useState([])
	const [newDistance, setNewDistance] = useState([])

	const openCloseNewRun = () => {
		setShowNewRun(!showNewRun)
	}

	const openCloseNewGoal = () => {
		setShowNewGoal(!showNewGoal)
	}

	const changeData = (e) => {
		setChangeNumbers(e)
		const changeDistance = () => {
			let today = new Date()
			if (changeNumbers === 'Daily') {
				let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
				setNewArray(runs.filter((run) => run.date === date))
			} else if (changeNumbers === 'Weekly') {
				today.setDate(today.getDate() - 7)
				let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
				setNewArray([runs.filter((run) => run.date >= date)])
			} else {
				today.setDate(today.getDate() - 30)
				let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
				setNewArray([runs.filter((run) => run.date >= date)])
			}
		}

		const runDistance = newArray.map(item => item.distanceNumber)
		console.log(runDistance)
		console.log(newArray)
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
					newArray = {newArray}
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

/*
	Have variables coming through app 
	Have teranarys use words to choose the props going throgh
	Need a daily, weekly and monthly (time and distance)
	Could make a new array that shows both time and distance 
		runs weekly runs monthly runs daily 



*/