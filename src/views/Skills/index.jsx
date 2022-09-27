import React, { useState } from 'react'
import './index.css'
import javascript from '../../assets/images/skills/javascript.png'
import node from '../../assets/images/skills/node.png'
import react from '../../assets/images/skills/react.png'
import sass from '../../assets/images/skills/sass.png'
import typescript from '../../assets/images/skills/typescript.jpg'
import vue from '../../assets/images/skills/vue.png'

const Skills = () => {
  const [selected, setSelected] = useState('JavaScript')

  const handleSkillClick = label => {
    setSelected(label)
  }

  return (
    <section className='principal-container' id='SkillsSection'>
      <div className='secondary-container skills-container'>
        <div className='title-container'>
          <h2>Skills</h2>
          <p>Some technologies that I have used...</p>
        </div>
        <div className='skills-gallery'>
          <ul>
            {skillImages.map(({ image, label }) => {
              return (
                <li
                  className={selected === label ? 'item-selected' : ''}
                  key={label}
                  onClick={() => handleSkillClick(label)}
                >
                  <img
                    alt={label}
                    src={image}
                    style={{
                      boxShadow: selected === label ? `${skillsData[selected].color} 0px 3px 29px 7px` : 'none'
                    }}
                  />
                </li>
              )
            })}
          </ul>
          <div className='skill-description'>
            <h3>{selected}</h3>
            <p>{skillsData[selected].description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const skillImages = [
  {
    image: javascript,
    label: 'JavaScript'
  },
  {
    image: react,
    label: 'React'
  },
  {
    image: typescript,
    label: 'TypeScript'
  },
  {
    image: sass,
    label: 'Sass'
  },
  {
    image: vue,
    label: 'Vue'
  },
  {
    image: node,
    label: 'Node'
  }
]

const skillsData = {
  JavaScript: {
    color: '#f0db4fd9',
    description:
      'My development stack is based on JavaScript, I love how much the language has grown over the years and I am excited to see where it will go.'
  },
  Node: {
    color: '#8dc700d9',
    description:
      'Today I have leaned towards server-side technologies, with Node being my first approach due to the learning curve in my case.'
  },
  React: {
    color: '#00daffd9',
    description:
      'React was the first library that I learned living all the new features and comunity, I continue using it as parto of my main stack in both professional and personal projects.'
  },
  Sass: {
    color: '#cf649bd9',
    description:
      'I have used multiple preprocessors such as Stylus and Less, but I prefer Sass as it is the one I have felt most comfortable with in recent years.'
  },
  TypeScript: {
    color: '#2875c4d9',
    description:
      'I have 2 years of experience using Typescript and love using it on projects that most need the level of organization that it offers.'
  },
  Vue: {
    color: '#41b884d9',
    description:
      'I had the opportunity to learn Vue, fascinated by its simplicity and features, would definitely use it again.'
  }
}

export default Skills
