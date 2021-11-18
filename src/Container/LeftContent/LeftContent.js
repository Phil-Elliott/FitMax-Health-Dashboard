import React, { useState } from 'react'
import LeftContentTop from './LeftContentTop'
import LeftContentBottom from './LeftContentBottom'
import AddNewRun from './AddNewRun'
import './LeftContent.scss'

const LeftContent = () => {
	const [showNewRun, setShowNewRun] = useState(true)


	return (
		<div className="leftContent-container">
			{showNewRun ? <LeftContentTop /> : <AddNewRun />}
			<LeftContentBottom />
		</div>
	)
}

export default LeftContent