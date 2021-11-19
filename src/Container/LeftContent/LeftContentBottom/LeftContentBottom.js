import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import Distance from './Distance'
import Calories from './Calories'
import Speed from './Speed'

const LeftContentBottom = ({ openNewGoal, distance, calories, time, distanceGoal, caloriesGoal, timeGoal }) => {
	const [change, setChange] = useState('')

	const changePage = (e) => {
		setChange(e)
	}

	return (
		<div>
			{(change === 'Distance') 
				? (
					<Distance 
						openNewGoal={openNewGoal}
						distance={distance} 
						calories={calories} 
						time={time}
						distanceGoal={distanceGoal} 
						caloriesGoal={caloriesGoal} 
						timeGoal={timeGoal}
						changePage={changePage}
					/>
				) : ((change === 'Calories') 
					? ( 
						<Calories 
							openNewGoal={openNewGoal}
							distance={distance} 
							calories={calories} 
							time={time}
							distanceGoal={distanceGoal} 
							caloriesGoal={caloriesGoal} 
							timeGoal={timeGoal}
							changePage={changePage}
						/>
					) : (
						<Speed 
							openNewGoal={openNewGoal}
							distance={distance} 
							calories={calories} 
							time={time}
							distanceGoal={distanceGoal} 
							caloriesGoal={caloriesGoal} 
							timeGoal={timeGoal}
							changePage={changePage}
						/>))
			}
		</div>
	)
}

export default LeftContentBottom

