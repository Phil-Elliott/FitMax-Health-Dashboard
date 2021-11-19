import React from 'react'
import RightContentTop from './RightContentTop'
import RightContentBottom from './RightContentBottom'
import './RightContent.scss'

const RightContent = ({ runs }) => {
	return (
		<div className="rightContent-container">
			<RightContentTop 
				runs={runs}
			/>
			<RightContentBottom />
		</div>
	)
}

export default RightContent