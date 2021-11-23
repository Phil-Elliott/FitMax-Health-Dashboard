import React, { useState } from 'react'
import './Navigation.scss'
import { FaHeartbeat, FaRunning, FaBiking, FaSwimmer, FaCog, FaSignOutAlt } from 'react-icons/fa'

const Navigation = ({ changePage }) => {
	const [navClass, setNavClass] = useState('nav-nav')

	const changeClass = () => {
		navClass === 'nav-nav' ? setNavClass('nav-nav active-nav') : setNavClass('nav-nav')	
	}

	return (
		<div className="navigation-container">
			<div className="header">
				<FaHeartbeat style={{color:'#b20a08', fontSize: '2rem'}}/>
				<h1>Fit<span style={{color:'#b20a08'}}>Max</span></h1>
			</div>
			<button href="#" className="toggle-button" onClick={changeClass}>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</button>
			<nav className={navClass}>
				<div>
					<FaRunning className="icon" />
					<h3>Running</h3>
				</div>
				<div>
					<FaBiking className="icon"/>
					<h3>Biking</h3>
				</div>
				<div>
					<FaSwimmer className="icon"/>
					<h3>Swimming</h3>
				</div>
				<div>
					<FaCog className="icon"/>
					<h3>Settings</h3>
				</div>
				<div className="sign-out">
					<FaSignOutAlt className="icon"/>
					<h3 onClick={() => changePage('register')}>Sign out</h3>
				</div>
			</nav>
		</div>
	)
}

export default Navigation