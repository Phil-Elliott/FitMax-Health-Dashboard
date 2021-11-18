const LeftContentTop = ({ openNewRun }) => {
	return (
		<div className='leftContentTop-container'>
			<div className="top-header">
				<h1>Running</h1>
			</div>
			<section className="nav-container">
				<nav className="options">
			  		<p style={{borderRadius: '50px 0 0 50px'}}>Daily</p>
			  		<p>Weekly</p>
			  		<p style={{borderRadius: '0 50px 50px 0'}}>Monthly</p>
			  	</nav>
			  		<p className="new" onClick={openNewRun}>New Run +</p>
			</section>
			<div>
				<p><strong>Distance</strong></p>
				<p>2.4 Miles</p>
			</div>
			<div>
				<p><strong>Calories</strong></p>
				<p>3476</p>
			</div>
			<div>
				<p><strong>Average Speed</strong></p>
				<p>10.64 MPM</p>
			</div>
		</div>
	)
}

export default LeftContentTop