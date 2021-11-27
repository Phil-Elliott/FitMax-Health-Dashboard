import React, { useState } from "react"
import axios from "axios"

const Register = ({ changePage, changeSign, loadUser }) => {
  const [registerName, setRegisterName] = useState("")
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")

  //Grabs input value for name
  const onNameChange = (e) => {
    setRegisterName(e.target.value)
  }

  //Grabs input value for email
  const onEmailChange = (e) => {
    setRegisterEmail(e.target.value)
  }

  //Grabs input value for password
  const onPasswordChange = (e) => {
    setRegisterPassword(e.target.value)
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
      const result = await axios.post("http://localhost:3001/register", newPost)
      changePage("main")
      loadUser(result.data)
    }
    fetchData()
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
          />
        </div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="password"
          onChange={onPasswordChange}
        />
        <div className="checkbox">
          <input id="terms" type="checkbox" name="consent" />
          <label htmlFor="terms">
            I agree to the <span>terms and conditions</span>
          </label>
        </div>
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
