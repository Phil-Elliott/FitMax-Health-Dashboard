import React, { useState } from 'react'
import './App.scss'
import Navigation from './Container/Navigation/Navigation'
import LeftContent from './Container/LeftContent/LeftContent'
import RightContent from './Container/RightContent/RightContent'

const App = () => {
  const [distance, setDistance] = useState(0)
  const [distanceGoal, setDistanceGoal] = useState(0)
  const [calories, setCalories] = useState(0)
  const [caloriesGoal, setCaloriesGoal] = useState(0)
  const [time, setTime] = useState(0)
  const [timeGoal, setTimeGoal] = useState(0)
  const [runs, setRuns] = useState([])

  const addDistance = (e, l) => {
    setDistance(Number(e) + (distance))
    setTime(Number(l) + (time))
    setCalories(Number(distance * 100))
  }

  const addGoal = (d, c, t) => {
    setDistanceGoal(Number(d))
    setCaloriesGoal(Number(c))
    setTimeGoal(Number(t))  
  }

  const addRun = (run) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newRun = { id, ...run }
    setRuns([...runs, newRun])
  }

  return (
    <div className="app-container">
      <Navigation />
      <LeftContent 
        distance={distance} 
        distanceGoal={distanceGoal}
        calories={calories} 
        caloriesGoal={caloriesGoal}
        time={time} 
        timeGoal={timeGoal}
        addDistance={addDistance}
        addGoal={addGoal}
        addRun={addRun}
        runs={runs}
      />
      <RightContent 
        runs={runs}
      />
    </div>
  )
}

export default App


/*
  1) Add extra pages
        - Add sign in and register page
        - Add settings page 
  2) Add copys that of main content to other pages
        - divert to this pages when they are clicked on 
        - change the information and the data 
*/