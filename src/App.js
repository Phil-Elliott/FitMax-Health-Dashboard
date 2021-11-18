import React, { useState } from 'react'
import './App.scss'
import Navigation from './Container/Navigation/Navigation'
import LeftContent from './Container/LeftContent/LeftContent'
import RightContent from './Container/RightContent/RightContent'

const App = () => {

  return (
    <div className="app-container">
      <Navigation />
      <LeftContent />
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