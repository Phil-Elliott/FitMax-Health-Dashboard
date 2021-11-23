import React, { useState } from 'react'
import './App.scss'
import Navigation from './Container/Navigation/Navigation'
import LeftContent from './Container/LeftContent/LeftContent'
import RightContent from './Container/RightContent/RightContent'
import SignInRegister from './Container/OtherPages/SignInRegister'
import Register from './Container/OtherPages/Register'

const App = () => {
  const [layout, setLayout] = useState('')
  const [distanceGoal, setDistanceGoal] = useState(0)
  const [caloriesGoal, setCaloriesGoal] = useState(0)
  const [timeGoal, setTimeGoal] = useState(0)
  const [runs, setRuns] = useState([])

  //Used to change from SignIn, Register, Settings, and Dashboard
  const changePage = (e) => {
    setLayout(e)
  }

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
      {(layout === 'main') ? (
        <>
          <Navigation 
            changePage={changePage}
          />
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
        </>
        ) : (
            <SignInRegister 
              changePage={changePage}
            />
          )
      }
    </div>
  )
}

export default App