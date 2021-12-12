import React, { useState, useEffect } from "react"
import LeftContentTop from "./LeftContentTop/LeftContentTop"
import LeftContentBottom from "./LeftContentBottom/LeftContentBottom"
import AddNewRun from "./LeftContentTop/AddNewRun"
import AddNewGoal from "./LeftContentBottom/AddNewGoal"
import "./LeftContent.scss"

const LeftContent = ({ addGoal, goals, addRun, runs, refresh, user }) => {
  const [showNewRun, setShowNewRun] = useState(true)
  const [showNewGoal, setShowNewGoal] = useState(true)
  const [newDistance, setNewDistance] = useState()
  const [newTime, setNewTime] = useState()

  //Toggles between adding a new run and data - in the top left container
  const openCloseNewRun = () => {
    setShowNewRun(!showNewRun)
  }

  //Toggles between adding a new goal and data - in the bottom left container
  const openCloseNewGoal = () => {
    setShowNewGoal(!showNewGoal)
  }

  // Use to change the data between the four different time periods - only effects left containers
  const changeData = (e) => {
    //Changes the array based off of a number of days using the objects date
    const changeDistance = () => {
      // Updates the dates of the runs into the correct format
      runs.forEach((run) => {
        let runDate = new Date(run.date)
        run.date =
          runDate.getFullYear() +
          "-" +
          (runDate.getMonth() + 1) +
          "-" +
          runDate.getDate()
        return runs
      })
      let today = new Date()
      //used to display the run data from today
      if (e === "Daily") {
        today.setDate(today.getDate())
        let date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate()
        let timedArray = runs.filter((run) => run.date === date)
        sumArray(timedArray)
        //used to display the run data from the past 7 days
      } else if (e === "Weekly") {
        today.setDate(today.getDate() - 7)
        let date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate()
        let timedArray = runs.filter((run) => run.date >= date)
        sumArray(timedArray)
        //used to display the run data from the past 30 days
      } else if (e === "Monthly") {
        today.setDate(today.getDate() - 30)
        let date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate()
        let timedArray = runs.filter((run) => run.date >= date)
        sumArray(timedArray)
        //used to display all of the run data
      } else {
        sumArray(runs)
      }
    }

    //Adds all of the data from the array
    const sumArray = (array) => {
      const distance = array.map((item) => item.distancenumber)
      const time = array.map((item) => item.lengthnumber)

      let sum = 0
      function simpleArraySum(newItem) {
        for (var i = 0; i < newItem.length; i++) {
          sum += Number(newItem[i])
        }
        return sum
      }

      setNewDistance(simpleArraySum(distance))
      setNewTime(simpleArraySum(time))
    }

    changeDistance()
  }

  //Uptates the data everytime the runs array changes
  useEffect(() => {
    changeData("Daily")
  }, [runs])

  const fixWeekly = () => {
    changeData("Monthly")
    changeData("Monthly")
    setTimeout(changeData, 5, "Weekly")
  }

  return (
    <div className="leftContent-container">
      {showNewRun ? (
        <LeftContentTop
          openNewRun={openCloseNewRun}
          changeData={changeData}
          newTime={newTime}
          newDistance={newDistance}
          refresh={refresh}
          fixWeekly={fixWeekly}
        />
      ) : (
        <AddNewRun
          closeNewRun={openCloseNewRun}
          addRun={addRun}
          changeData={changeData}
        />
      )}
      {showNewGoal ? (
        <LeftContentBottom
          openNewGoal={openCloseNewGoal}
          goals={goals}
          newTime={newTime}
          newDistance={newDistance}
        />
      ) : (
        <AddNewGoal closeNewGoal={openCloseNewGoal} addGoal={addGoal} />
      )}
    </div>
  )
}

export default LeftContent

/*
  Start of by seting a new state and running it using daily

*/
