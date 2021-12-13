import React, { useState } from "react"
import "./Navigation.scss"
import {
  FaHeartbeat,
  FaRunning,
  FaBiking,
  FaSwimmer,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa"

const Navigation = ({ changePage, changeName }) => {
  const [navClass, setNavClass] = useState("nav-nav")
  const [active, setActive] = useState("Running")

  //Changes the background of the nav button that is clicked
  const handleToggle = (name) => {
    setActive(name)
  }

  // Changes the nav to hamburger menu based off of page size
  const changeClass = () => {
    navClass === "nav-nav"
      ? setNavClass("nav-nav active-nav")
      : setNavClass("nav-nav")
  }

  return (
    <div className="navigation-container">
      <div className="header">
        <FaHeartbeat style={{ color: "#b20a08", fontSize: "2rem" }} />
        <h1>
          Fit<span style={{ color: "#b20a08" }}>Max</span>
        </h1>
      </div>
      <button href="#" className="toggle-button" onClick={changeClass}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav className={navClass}>
        <div>
          <FaRunning className="icon" />
          <h3
            className={active === "Running" ? "activeNav" : "none"}
            onClick={() => changeName("running")}
          >
            <span onClick={() => handleToggle("Running")}>Running</span>
          </h3>
        </div>
        <div>
          <FaBiking className="icon" />
          <h3
            className={active === "Biking" ? "activeNav" : "none"}
            onClick={() => changeName("biking")}
          >
            <span onClick={() => handleToggle("Biking")}>Biking</span>
          </h3>
        </div>
        <div>
          <FaSwimmer className="icon" />
          <h3
            className={active === "Swimming" ? "activeNav" : "none"}
            onClick={() => changeName("swimming")}
          >
            <span onClick={() => handleToggle("Swimming")}>Swimming</span>
          </h3>
        </div>
        <div>
          <FaCog className="icon" />
          <h3>Settings</h3>
        </div>
        <div className="sign-out">
          <FaSignOutAlt className="icon" />
          <h3 onClick={() => changePage("register")}>Sign out</h3>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
