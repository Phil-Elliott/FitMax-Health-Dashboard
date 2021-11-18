import React from 'react'
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
  1) create layout 
    a) Break it into 3 parets 
        - Nav (hamburger and name when responsive)
        - Left side
            - Status on top 
            - Goals and Results 
        - Right side 
            - Graph
            - Activity 
    b) Add extra pages
        - Add sign in and register page
        - Add settings page 
*/