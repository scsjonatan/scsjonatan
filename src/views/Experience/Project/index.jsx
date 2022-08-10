import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Project = ({ image, label, description, link }) => (
  <figure className='project-element'>
    <img alt={label} src={image} />
    <figcaption>
      <h3>{label}</h3>
      <p>
        {description}{' '}
        <a href={link} rel='noopener noreferrer' target='_blank'>
          More...
        </a>
      </p>
    </figcaption>
  </figure>
)
export default Project

Project.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  label: PropTypes.string,
  link: PropTypes.string
}
