import React, { useState } from 'react'
import Distance from './Distance'
import Calories from './Calories'
import Speed from './Speed'

const LeftContentBottom = ({ openNewGoal, distanceGoal, caloriesGoal, timeGoal, newTime, newDistance }) => {
	const [change, setChange] = useState('')

	//Used to change the bottom left content between the three options
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

