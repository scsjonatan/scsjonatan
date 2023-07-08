import React from 'react'
import Project from './Project/index.jsx'
import './index.css'
import experiencePunkpost from '../../assets/images/experience/punkpost.jpg'
import experienceConekta from '../../assets/images/experience/conekta.jpg'
import experienceLyft from '../../assets/images/experience/lyft.png'

const experiences = [
  {
    color: '#fff',
    description: 'A ride whenever you need one',
    image: experienceLyft,
    label: 'Lyft',
    link: 'https://www.lyft.com/'
  },
  {
    color: '#fff',
    description: 'FinTech: Online payment ecosystem.',
    image: experienceConekta,
    label: 'Conekta',
    link: 'https://conekta.com/'
  },
  {
    color: '#fff',
    description: 'Beautifully handwritten cards',
    image: experiencePunkpost,
    label: 'Punkpost',
    link: 'https://punkpost.com'
  },
]

const Experience = () => (
  <section className='principal-container' id='ExperienceContainer'>
    <div className='secondary-container experience-container'>
      <div className='experience-header'>
        <h2>Experience</h2>
        <p>Some of the projects I have worked on...</p>
      </div>
      <div className='projects-list'>
        <ul>
          {experiences.map(experience => (
            <li key={experience.label}>
              <Project {...experience} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default Experience
