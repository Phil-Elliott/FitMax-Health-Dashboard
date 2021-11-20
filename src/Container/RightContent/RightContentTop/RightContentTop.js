import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';
import Distance from './Distance'
import Calories from './Calories'
import Speed from './Speed'

const RightContentTop = ({ runs }) => {
  const [change, setChange] = useState('')

  const changePage = (e) => {
    setChange(e)
  }

  return (
    <div>
      {(change === 'Distance') 
        ? (
          <Distance 
            runs = {runs}
            changePage={changePage}
          />
        ) : ((change === 'Calories') 
          ? ( 
            <Calories 
              runs = {runs}
              changePage={changePage}
            />
          ) : (
            <Speed 
              runs = {runs}
              changePage={changePage}
            />))
      }
    </div>
  )
}
  

export default RightContentTop;