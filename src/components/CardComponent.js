import React from 'react'
import '../index.css'
import { PropTypes } from 'prop-types'
// import { Link } from 'react-router-dom'

function CardComponent(props) {
  return (
    <div
      className="card-component"
      style={{
        width: props.width,
        height: props.height,
        margin: props.margin,
        padding: '15px',
        backgroundColor: 'white',
        borderRadius: '5px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div
          style={{
            marginRight: '20px',
            padding: '12px',
            backgroundColor: props.backgroundColor,
            borderRadius: '100%',
            height: '50px',
            width: '50px',
          }}
        >
          {props.icon}
        </div>
        <div>
          <div style={{ color: '#21a8de', fontWeight: '400', fontSize: '18px' }}>{props.title}</div>
          <div style={{ color: 'black' }}>{props.description}</div>
        </div>
      </div>
    </div>
  )
}

CardComponent.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.any,
  backgroundColor: PropTypes.any,
  width: PropTypes.any,
  height: PropTypes.any,
  margin: PropTypes.any,
}

export default CardComponent
