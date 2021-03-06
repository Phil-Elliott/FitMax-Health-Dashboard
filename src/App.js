import React, { useState, useEffect } from "react"
import "./App.scss"
import axios from "axios"
import Navigation from "./Container/Navigation/Navigation"
import LeftContent from "./Container/LeftContent/LeftContent"
import RightContent from "./Container/RightContent/RightContent"
import SignInRegister from "./Container/SignIn-Register/SignInRegister"

const App = () => {
  const [layout, setLayout] = useState("")
  const [runs, setRuns] = useState()
  const [sportName, setSportName] = useState("running")
  const [goals, setGoals] = useState([
    {
      distance: "",
      calories: "",
      speed: "",
    },
  ])
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
      const result = await axios.get(
        "https://warm-beach-67541.herokuapp.com/profile/",
        {
          params: { email: user.email, sport: sportName },
        }
      )
      setRuns(result.data)
    }
    fetchData()
  }

  // Used to refresh the users goals
  const getGoals = () => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://warm-beach-67541.herokuapp.com/goalsData/",
        {
          params: { email: user.email, sport: sportName },
        }
      )
      setGoals(result.data)
    }
    fetchData()
  }

  //Used to change from SignIn, Register, Settings, and Dashboard
  const changePage = (e) => {
    setLayout(e)
  }

  // adds the new goals or updates the previous
  const addGoal = (d, c, t) => {
    let details = {
      email: user.email,
      distance: d,
      calories: c,
      time: t,
      sport: sportName,
    }
    const addData = async () => {
      const result = await axios.post(
        "https://warm-beach-67541.herokuapp.com/goals",
        details
      )
    }
    addData()
    setTimeout(getGoals, 500)
  }

  //Adds a run to the array and gives it an id - through the top left container
  const addRun = (run) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const email = user.email
    const sport = sportName
    const lastRun = { sport, id, email, ...run }
    const addData = async () => {
      const result = await axios.put(
        "https://warm-beach-67541.herokuapp.com/run",
        lastRun
      )
    }
    addData()
    setTimeout(refresh, 500)
  }

  //Delete a run from the array - through the button on bottom right container
  const onDelete = (id) => {
    const deleteData = async () => {
      const result = await axios.delete(
        "https://warm-beach-67541.herokuapp.com/delete/",
        {
          params: { id: id, sport: sportName },
        }
      )
    }
    deleteData()
    setTimeout(refresh, 200)
  }

  // refreshes the array everytime the user is changed
  useEffect(() => {
    refresh()
    getGoals()
  }, [user])

  // Change the name in the top left box
  const changeName = (name) => {
    setSportName(name)
  }

  useEffect(() => {
    getGoals()
    refresh()
  }, [sportName])

  return (
    <div className="app-container">
      {layout === "main" ? (
        <>
          <Navigation changePage={changePage} changeName={changeName} />
          <LeftContent
            addGoal={addGoal}
            goals={goals}
            addRun={addRun}
            runs={runs}
            refresh={refresh}
            sportName={sportName}
            user={user}
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
