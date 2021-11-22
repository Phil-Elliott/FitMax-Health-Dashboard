import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';
import Distance from './Distance'
import Calories from './Calories'
import Speed from './Speed'

const RightContentTop = ({ runsOrdered }) => {
  const [change, setChange] = useState('')

  //Changes the data on the top right container
  const changePage = (e) => {
    setChange(e)
  }

  return (
    <div>
      {(change === 'Speed') 
        ? (
          <Speed 
              runsOrdered={runsOrdered}
              changePage={changePage}
          />
        ) : ((change === 'Calories') 
          ? ( 
            <Calories 
              runsOrdered={runsOrdered}
              changePage={changePage}
            />
          ) : (
            <Distance 
              runsOrdered={runsOrdered}
              changePage={changePage}
            />))
      }
    </div>
  )
}
  

export default RightContentTop;

