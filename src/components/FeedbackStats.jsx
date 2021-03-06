import React from 'react'
import { PropTypes } from 'prop-types'

function FeedbackStats({feedback}) {
    //Calculate average rating
    let average = feedback.reduce((sum, current) => {
        return sum + current.rating
    }, 0) / feedback.length

    average = average.toFixed(1)

    return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
    </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}

export default FeedbackStats