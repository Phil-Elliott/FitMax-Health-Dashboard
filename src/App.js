import React, { useState } from 'react'
import './App.scss'
import Navigation from './Container/Navigation/Navigation'
import LeftContent from './Container/LeftContent/LeftContent'
import RightContent from './Container/RightContent/RightContent'

const App = () => {
  const [distanceGoal, setDistanceGoal] = useState(0)
  const [caloriesGoal, setCaloriesGoal] = useState(0)
  const [timeGoal, setTimeGoal] = useState(0)
  const [runs, setRuns] = useState([])

  //Adds the three different goals - through bottom left container 
  const addGoal = (d, c, t) => {
    setDistanceGoal(Number(d))
    setCaloriesGoal(Number(c))
    setTimeGoal(Number(t))  
  }

  //Adds a run to the array and gives it an id - through the top left container
  const addRun = (run) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newRun = { id, ...run }
    setRuns([...runs, newRun])
  }

  //Delete a run from the array - though the button on bottom right container
  const onDelete = (id) => {
    setRuns(runs.filter((run) => run.id !== id))
  }

  return (
    <div className="app-container">
      <Navigation />
      <LeftContent 
        distanceGoal={distanceGoal}
        caloriesGoal={caloriesGoal}
        timeGoal={timeGoal}
        addGoal={addGoal}
        addRun={addRun}
        runs={runs}
      />
      <RightContent 
        runs={runs}
        onDelete={onDelete}
      />
    </div>
  )
}

export default App