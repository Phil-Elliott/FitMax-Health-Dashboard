import React, { useState, useEffect } from "react"
import "./App.scss"
import axios from "axios"
import Navigation from "./Container/Navigation/Navigation"
import LeftContent from "./Container/LeftContent/LeftContent"
import RightContent from "./Container/RightContent/RightContent"
import SignInRegister from "./Container/OtherPages/SignInRegister"
import { getDefaultNormalizer } from "@testing-library/react"

const App = () => {
  const [layout, setLayout] = useState("")
  const [distanceGoal, setDistanceGoal] = useState(0)
  const [caloriesGoal, setCaloriesGoal] = useState(0)
  const [timeGoal, setTimeGoal] = useState(0)
  const [runs, setRuns] = useState()
  const [newRun, setNewRun] = useState({
    id: "",
    distanceNumber: "",
    lengthNumber: "",
    date: "",
  })
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    joined: "",
  })

  //Used to load the users data when they signIn
  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      joined: data.joined,
    })
  }

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
    const email = user.email
    const lastRun = { id, email, ...run }
    setRuns([...runs, lastRun])
    console.log(lastRun)
    console.log(runs)
    setNewRun({
      id: lastRun.id,
      distancenumber: lastRun.distancenumber,
      lengthnumber: lastRun.lengthnumber,
      date: lastRun.date,
    })
  }

  //Delete a run from the array - though the button on bottom right container
  const onDelete = (id) => {
    setRuns(runs.filter((run) => run.id !== id))
  }

  const newPut = {
    email: user.email,
    id: newRun.id,
    distancenumber: newRun.distancenumber,
    lengthnumber: newRun.lengthnumber,
    joined: newRun.date,
  }

  //add if statement(if run id has a match delete and same email, if not add)
  // Used to update the database with the new runs
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.put("http://localhost:3001/run", newPut)
    }
    fetchData()
  }, [runs])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3001/profile/", {
        params: { email: user.email },
      })
      setRuns(result.data)
    }
    fetchData()
  }, [user])

  return (
    <div className="app-container">
      {layout === "main" ? (
        <>
          <Navigation changePage={changePage} />
          <LeftContent
            distanceGoal={distanceGoal}
            caloriesGoal={caloriesGoal}
            timeGoal={timeGoal}
            addGoal={addGoal}
            addRun={addRun}
            runs={runs}
          />
          <RightContent runs={runs} onDelete={onDelete} />
        </>
      ) : (
        <SignInRegister changePage={changePage} loadUser={loadUser} />
      )}
    </div>
  )
}

export default App
