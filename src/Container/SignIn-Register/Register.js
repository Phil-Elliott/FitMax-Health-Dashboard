import React, { useState } from "react"
import axios from "axios"

const Register = ({ changePage, changeSign, loadUser }) => {
  const [registerName, setRegisterName] = useState("")
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [error, setError] = useState({
    email: "",
    password: "",
  })
  const [submit, setSubmit] = useState(true)
  const [check, setCheck] = useState(false)

  //Grabs input value for name
  const onNameChange = (e) => {
    setRegisterName(e.target.value)
  }

  const throwErrors = () => {
    if (!registerEmail) {
      error.email = "Email address is invalid"
      setSubmit(false)
    } else {
      error.email = ""
      setSubmit(true)
    }
    if (!/\S+@\S+\.\S+/.test(registerEmail)) {
      error.email = "Email address is invalid"
      setSubmit(false)
    } else {
      error.email = ""
      setSubmit(true)
    }
    if (registerPassword.length < 8) {
      error.password = "Password must be 8 or more characters"
      setSubmit(false)
    } else {
      error.password = ""
      setSubmit(true)
    }
  }

  //Grabs input value for email
  const onEmailChange = (e) => {
    setRegisterEmail(e.target.value)
    //throwErrors()
  }

  //Grabs input value for password
  const onPasswordChange = (e) => {
    setRegisterPassword(e.target.value)
    throwErrors()
    setTimeout(console.log(submit), 500)
  }

  // Creates object for server with form info
  const newPost = {
    email: registerEmail,
    password: registerPassword,
    name: registerName,
  }

  // Post new object to server, changes to main page, sends new user data to app
  const onSubmitSignIn = () => {
    const fetchData = async () => {
      const result = await axios.post(
        "https://warm-beach-67541.herokuapp.com/register",
        newPost
      )
      changePage("main")
      loadUser(result.data)
    }
    if (submit) {
      fetchData()
    }
  }

  const changeCheck = () => {
    setCheck(!check)
  }

  return (
    <article className="right-signIn">
      <main>
        <h2>Create your account</h2>
        <p>
          Have an account already?{" "}
          <span onClick={() => changeSign("SignIn")}>Log in here</span>
        </p>
        <div className="top-inputs">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={onNameChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="input-right"
            onChange={onEmailChange}
            required
          />
        </div>
        <p className="error-message">{error.email}</p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="password"
          onChange={onPasswordChange}
          required
        />
        <p className="error-message">{error.password}</p>
        <div className="checkbox" onClick={changeCheck}>
          <input id="terms" type="checkbox" name="consent" required />
          <label htmlFor="terms">
            I agree to the <span>terms and conditions</span>
          </label>
        </div>
        <p className="error-message">
          {!check ? "Must agree to the terms" : ""}
        </p>
        <input
          onClick={onSubmitSignIn}
          type="submit"
          value="Sign Up"
          className="btn btn-block sign-btn"
        />
      </main>
    </article>
  )
}

export default Register
