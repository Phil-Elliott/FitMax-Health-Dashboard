import React, { useState } from "react"
import axios from "axios"

const SignIn = ({ changePage, changeSign, loadUser }) => {
  const [signInEmail, setSignInEmail] = useState("")
  const [signInPassword, setSignInPassword] = useState("")
  const [error, setError] = useState(false)

  //Grabs input value for email
  const onEmailChange = (e) => {
    setSignInEmail(e.target.value)
  }

  //Grabs input value for password
  const onPasswordChange = (e) => {
    setSignInPassword(e.target.value)
  }

  // Creates object for server with form info
  const newPost = {
    email: signInEmail,
    password: signInPassword,
  }

  // Checks object on server, changes to main page, sends user data to app
  const onSubmitSignIn = () => {
    const fetchData = async () => {
      const result = await axios.post(
        "https://warm-beach-67541.herokuapp.com/signin",
        newPost
      )
      if (result.data) {
        changePage("main")
        loadUser(result.data)
      }
    }
    fetchData()
    setTimeout(() => {
      setError(true)
    }, 500)
  }

  return (
    <article className="right-signIn">
      <main>
        <h2>Sign in to your account</h2>
        <p>
          Don't have an account?{" "}
          <span onClick={() => changeSign("Register")}>Sign up here</span>
        </p>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          className="password"
          style={{ marginBottom: "5px" }}
          onChange={onEmailChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="password"
          onChange={onPasswordChange}
        />
        <p className="error-message">
          {error ? "Incorrect email or password" : ""}
        </p>
        <input
          onClick={onSubmitSignIn}
          type="submit"
          value="Sign In"
          className="btn btn-block sign-btn"
        />
      </main>
    </article>
  )
}

export default SignIn
