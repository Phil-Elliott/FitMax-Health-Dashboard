import './Navigation.scss'
import { FaHeartbeat, FaRunning, FaBiking, FaSwimmer, FaCog, FaSignOutAlt } from 'react-icons/fa'


const Navigation = () => {
	return (
		<div className="navigation-container">
			<div className="header">
				<FaHeartbeat style={{color:'#b20a08', fontSize: '2rem'}}/>
				<h1>Fit<span style={{color:'#b20a08'}}>Max</span></h1>
			</div>
			<nav>
				<div>
					<FaRunning />
					<h3>Running</h3>
				</div>
				<div>
					<FaBiking />
					<h3>Biking</h3>
				</div>
				<div>
					<FaSwimmer />
					<h3>Swimming</h3>
				</div>
				<div>
					<FaCog />
					<h3>Settings</h3>
				</div>
				<div className="sign-out">
					<FaSignOutAlt />
					<h3>Sign out</h3>
				</div>
			</nav>
		</div>
	)
}

export default Navigation