import React from 'react'

const SignIn = ({ changePage, changeSign }) => {
	return (
		<article className="right-signIn">
			<main>
				<h2>Sign in to your account</h2>
				<p>Don't have an account? <span onClick={() => changeSign('Register')}>Sign up here</span></p>
				<input type="email" name="email" placeholder="Email address" className='password' style={{marginBottom:'5px'}}/>
				<input type="password" name="password" placeholder="Password" className='password'/>
				<input onClick={() => changePage('main')} type='submit' value='Sign In' className='btn btn-block sign-btn' />
			</main>
		</article>
	)
}

export default SignIn