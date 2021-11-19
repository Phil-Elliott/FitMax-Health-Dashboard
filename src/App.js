import React, { useState } from 'react'
import './App.scss'
import Navigation from './Container/Navigation/Navigation'
import LeftContent from './Container/LeftContent/LeftContent'
import RightContent from './Container/RightContent/RightContent'

const App = () => {
  const [distance, setDistance] = useState(0)
  const [calories, setCalories] = useState(0)
  const [time, setTime] = useState(0)

  const addDistance = (e, l) => {
    setDistance((Number(e) + (distance)).toFixed(2))
    setTime(Number(l) + (time))
  }



  return (
    <div className="app-container">
      <Navigation />
      <LeftContent 
        distance={distance} 
        calories={calories} 
        time={time} 
        addDistance={addDistance}
      />
      <RightContent />
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