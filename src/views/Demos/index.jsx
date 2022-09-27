import React from 'react'
import './index.css'
import disneyImage from '../../assets/images/demos/viewers-disney.png'
import disneyVideo from '../../assets/videos/1564674844-disney.mp4'

const Demos = () => (
  <section className='principal-container' id='DemosContainer'>
    <div className='secondary-container demos-container'>
      <div className='demos-header'>
        <h2>Demos</h2>
        <p>Some Demos of my work using different technologies...</p>
      </div>
      <div className='demos-list'>
        <div className='demos-list-element'>
          <a href='https://disney.scsjonatan.me/' rel='noopener noreferrer' target='_blank'>
            <img alt='Disney' src={disneyImage} />
            <video autoPlay loop playsInline>
              <source src={disneyVideo} type='video/mp4' />
            </video>
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Demos
