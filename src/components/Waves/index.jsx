import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Waves = ({ color }) => {
  return (
    <div
      style={{
        backgroundColor: color
      }}
    >
      <div>
        <svg className='waves' preserveAspectRatio='none' viewBox='0 24 150 25'>
          <defs>
            <path d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z' id='gentle-wave' />
          </defs>
          <g className='parallax'>
            <use fill='rgba(255,255,255,0.7' x='48' xlinkHref='#gentle-wave' y='0' />
            <use fill='rgba(255,255,255,0.5)' x='48' xlinkHref='#gentle-wave' y='3' />
            <use fill='rgba(255,255,255,0.3)' x='48' xlinkHref='#gentle-wave' y='5' />
            <use fill='#fff' x='48' xlinkHref='#gentle-wave' y='7' />
          </g>
        </svg>
      </div>
    </div>
  )
}

Waves.propTypes = {
  color: PropTypes.string
}

export default Waves
