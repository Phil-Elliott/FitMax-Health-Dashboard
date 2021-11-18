import RightContentTop from './RightContentTop'
import RightContentBottom from './RightContentBottom'
import './RightContent.scss'

const RightContent = () => {
	return (
		<div className="rightContent-container">
			<RightContentTop />
			<RightContentBottom />
		</div>
	)
}

export default RightContent