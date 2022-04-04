import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import Header from "./components/Header"
import PropTypes from 'prop-types'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

function App() {
	const [feedback, setFeedback] = useState(FeedbackData)
	
	const deleteFeedback = (id) => {
		if(window.confirm('Are you sure you want to delete this feedback item?')) {
			setFeedback(feedback.filter((item) => item.id !== id
			))
		}
	}

	const addFeedback = (item) => {
		item.id = uuidv4()
		
		setFeedback([item, ...feedback])
	}

	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackForm feedback={feedback} addFeedback={addFeedback}/>
				<FeedbackStats feedback={feedback}/>
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
			</div>
		</>
	)
}

Header.defaultProps = {
	text: 'Feedback UI',
	bgColor: 'rgba(0,0,0,0.4)',
	textColor: '#ff6a95'
}

Header.propTypes = {
	text: PropTypes.string,
	bgColor: PropTypes.string,
	textColor: PropTypes.string
}

export default App