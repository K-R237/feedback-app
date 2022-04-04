import { FaTimes } from 'react-icons/fa'
import React from 'react'
import {useState} from 'react'
import Card from './Shared/Card'
import PropTypes from 'prop-types'

function FeedbackItem({item, handleDelete}) {

    return (
    <Card>
        <div className='num-display'>{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} className="close">
            <FaTimes color='purple' />
        </button>
        <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default FeedbackItem