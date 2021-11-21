import React, { useState, useEffect } from 'react'
import LeftContentTop from './LeftContentTop'
import LeftContentBottom from './LeftContentBottom/LeftContentBottom'
import AddNewRun from './AddNewRun'
import AddNewGoal from './AddNewGoal'
import './LeftContent.scss'

const LeftContent = ({ distance, distanceGoal, calories, caloriesGoal, time, timeGoal, addDistance, addGoal, addRun, runs }) => {
	const [showNewRun, setShowNewRun] = useState(true) 
	const [showNewGoal, setShowNewGoal] = useState(true) 
	const [newDistance, setNewDistance] = useState()
	const [newTime, setNewTime] = useState()

	const openCloseNewRun = () => {
		setShowNewRun(!showNewRun)
	}

	const openCloseNewGoal = () => {
		setShowNewGoal(!showNewGoal)
	}

	const changeData = (e) => {

		const changeDistance = () => {
			let today = new Date()
			if (e === 'Daily') {
				let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
				let timedArray = runs.filter((run) => run.date === date)
				sumArray(timedArray)
			} else if (e === 'Weekly') {
				today.setDate(today.getDate() - 7)
				let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
				let timedArray = runs.filter((run) => run.date >= date)
				sumArray(timedArray)
			} else if (e === 'Monthly') {
				today.setDate(today.getDate() - 30)
				let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
				let timedArray = runs.filter((run) => run.date >= date)
				sumArray(timedArray)
			} else {
				sumArray(runs)
			}
		}

		const sumArray = (array) => {
			const distance = array.map(item => item.distanceNumber) 
			const time = array.map(item => item.lengthNumber)

			var sum = 0;
			function simpleArraySum(newItem) {
			  for (var i = 0; i < newItem.length; i++) {
			    sum += Number(newItem[i])
			  }
			  return sum
			}

			setNewDistance(simpleArraySum(distance))
			setNewTime(simpleArraySum(time))
		}

		changeDistance()
	}

	useEffect(() => {
	  changeData('Daily')
	}, [runs]);

	return (
		<div className="leftContent-container">
			{showNewRun ? 
				<LeftContentTop 
					openNewRun={openCloseNewRun} 
					distance={distance} 
					calories={calories} 
					time={time}
					changeData={changeData}
					newTime={newTime}
					newDistance={newDistance}
				/> 
				: 
				<AddNewRun 
					closeNewRun={openCloseNewRun} 
					addDistance={addDistance}
					addRun={addRun}
					changeData={changeData}
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
					newTime={newTime}
					newDistance={newDistance}
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