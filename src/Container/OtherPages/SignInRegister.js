import React, { useState } from "react"
import { FaHeartbeat } from "react-icons/fa"
import "./SignIn.scss"
import SignIn from "./SignIn"
import Register from "./Register"

const SignInRegister = ({ changePage, loadUser }) => {
  const [sign, setSign] = useState("Sign")

  //Used to change from signIn and register
  const changeSign = (e) => {
    setSign(e)
  }

  return (
    <div className="signIn-main">
      <div className="signIn-bg">
        <div className="signIn-container">
          <div className="header first-header">
            <FaHeartbeat style={{ color: "#b20a08", fontSize: "2rem" }} />
            <h1>
              Fit<span style={{ color: "#b20a08" }}>Max</span>
            </h1>
          </div>
          <div className="left-signIn">
            <h1>Train yourself for greatness</h1>
            <ul>
              <li>Track your daily cardio and see your results</li>
              <li>Use your data to succeed</li>
              <li>Set your goals with our three options</li>
            </ul>
          </div>
          {sign === "Register" ? (
            <Register
              changePage={changePage}
              changeSign={changeSign}
              loadUser={loadUser}
            />
          ) : (
            <SignIn
              changeSign={changeSign}
              changePage={changePage}
              loadUser={loadUser}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default SignInRegister
