import React from 'react'
import Project from './Project/index.jsx'
import './index.css'
import experiencePunkpost from '../../assets/images/experience/punkpost.jpg'
import experienceConekta from '../../assets/images/experience/conekta.jpg'
import experienceSegunda from '../../assets/images/experience/segundamano.jpg'

const experiences = [
  {
    color: '#fff',
    description: 'FinTech: Online payment ecosystem.',
    image: experienceConekta,
    label: 'Conekta',
    link: 'https://conekta.com/blog'
  },
  {
    color: '#fff',
    description: 'Beautifully handwritten cards',
    image: experiencePunkpost,
    label: 'Punkpost',
    link: 'https://punkpost.com'
  },
  {
    color: '#fff',
    description: 'Ecomerce: "7 Million users buying and selling"',
    image: experienceSegunda,
    label: 'Segundamano',
    link: 'https://www.segundamano.mx'
  }
]

const Experience = () => (
  <section id='ExperienceContainer' className='principal-container'>
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
