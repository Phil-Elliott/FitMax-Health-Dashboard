import { FaTimes } from 'react-icons/fa'

const Run = ({ id, runDate, runDistance, runSpeed, onDelete }) => {
	return (
		<div>
			<p>{runDate}</p>
			<p>{runDistance} Miles</p>
			<p>{runSpeed} Mins</p>
			<FaTimes 
				className = "delete"
				onClick={() => onDelete(id)}
			/>
		</div>
	)
}

export default Run