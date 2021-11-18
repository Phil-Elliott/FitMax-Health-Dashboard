import LeftContentTop from './LeftContentTop'
import LeftContentBottom from './LeftContentBottom'
import './LeftContent.scss'

const LeftContent = () => {
	return (
		<div className="leftContent-container">
			<LeftContentTop />
			<LeftContentBottom />
		</div>
	)
}

export default LeftContent