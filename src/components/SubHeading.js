import React from 'react'
import { PropTypes } from 'prop-types'

function SubHeading(props) {
  return (
    <div
      style={{
        padding: '3px',
        backgroundColor: props.backgroundColor,
        color: 'white',
        textAlign: 'center',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div></div>
      <h4>{props.title}</h4>
      <div>{props.icon}</div>
    </div>
  )
}

SubHeading.propTypes = {
  title: PropTypes.any,
  backgroundColor: PropTypes.any,
  padding: PropTypes.any,
  icon: PropTypes.any,
}

export default SubHeading
