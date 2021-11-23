import React from 'react'

const Register = ({ changePage, changeSign }) => {
	return (
		<article className="right-signIn">
			<main>
				<h2>Create your account</h2>
				<p>Have an account already? <span onClick={() => changeSign('SignIn')}>Log in here</span></p>
				<div class="top-inputs">
					<input type="text" name="name" placeholder="Name" />
					<input type="email" name="email" placeholder="Email address" className='input-right'/>
				</div>
				<input type="password" name="password" placeholder="Password" className='password'/>
				<div class="checkbox">
					<input type="checkbox" name="consent"/>
					<label>I agree to the <span>terms and conditions</span></label>
				</div>
				<input onClick={() => changePage('main')} type='submit' value='Sign Up' className='btn btn-block sign-btn' />
			</main>
		</article>
	)
}

export default Register