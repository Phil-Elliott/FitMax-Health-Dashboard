import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import Distance from './Distance'
import Calories from './Calories'
import Speed from './Speed'

const LeftContentBottom = ({ openNewGoal, distance, calories, time, distanceGoal, caloriesGoal, timeGoal, newTime, newDistance }) => {
	const [change, setChange] = useState('')

	const changePage = (e) => {
		setChange(e)
	}

	return (
		<div>
			{(change === 'Speed') 
				? (
					<Speed 
						openNewGoal={openNewGoal}
						distanceGoal={distanceGoal} 
						caloriesGoal={caloriesGoal} 
						timeGoal={timeGoal}
						changePage={changePage}
						newTime={newTime}
						newDistance={newDistance}
					/>
				) : ((change === 'Calories') 
					? ( 
						<Calories 
							openNewGoal={openNewGoal}
							calories={calories} 
							distanceGoal={distanceGoal} 
							caloriesGoal={caloriesGoal} 
							timeGoal={timeGoal}
							changePage={changePage}
							newDistance={newDistance}
						/>
					) : (
						<Distance 
							openNewGoal={openNewGoal}
							distanceGoal={distanceGoal} 
							caloriesGoal={caloriesGoal} 
							timeGoal={timeGoal}
							changePage={changePage}
							newDistance={newDistance}
						/>))
			}
		</div>
	)
}

export default LeftContentBottom

