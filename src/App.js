import React, { useState, useEffect } from "react"
import "./App.scss"
import axios from "axios"
import Navigation from "./Container/Navigation/Navigation"
import LeftContent from "./Container/LeftContent/LeftContent"
import RightContent from "./Container/RightContent/RightContent"
import SignInRegister from "./Container/OtherPages/SignInRegister"

const App = () => {
  const [layout, setLayout] = useState("")
  const [distanceGoal, setDistanceGoal] = useState(0)
  const [caloriesGoal, setCaloriesGoal] = useState(0)
  const [timeGoal, setTimeGoal] = useState(0)
  const [runs, setRuns] = useState()
  const [goals, setGoals] = useState()
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

  // Used to refresh the run array
  const refresh = () => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3001/profile/", {
        params: { email: user.email },
      })
      setRuns(result.data)
    }
    fetchData()
  }

  // Used to refresh the users goals
  const getGoals = () => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3001/goalsData/", {
        params: { email: user.email },
      })
      setGoals(result.data)
    }
    fetchData()
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
    const addData = async () => {
      const result = await axios.put("http://localhost:3001/run", lastRun)
    }
    addData()
    setTimeout(refresh, 50)
  }

  //Delete a run from the array - through the button on bottom right container
  const onDelete = (id) => {
    console.log(id)
    const deleteData = async () => {
      const result = await axios.delete("http://localhost:3001/delete/", {
        params: { id: id },
      })
    }
    deleteData()
    setTimeout(refresh, 200)
  }

  // refreshes the array everytime the user is changed
  useEffect(() => {
    refresh()
    getGoals()
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
            refresh={refresh}
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
