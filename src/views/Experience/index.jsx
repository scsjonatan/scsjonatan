import React from 'react'
import Project from './Project/index.jsx'
import './index.css'

const Experience = () => (
  <section className='principal-container'>
    <div className='secondary-container experience-container'>
      <div className='experience-header'>
        <h2>Experience</h2>
        <p>Some of the projects I have worked on...</p>
      </div>
      <div className='projects-list'>
        <ul>
          <li>
            <Project />
          </li>
          <li>
            <Project />
          </li>
          <li>
            <Project />
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Experience
