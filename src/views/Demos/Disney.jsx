import React from 'react'

import disneyImage from '../../assets/images/demos/viewers-disney.png'
import disneyVideo from '../../assets/videos/disney.mp4'

const Disney = () => {
  return (
    <div className='demos-list-element'>
      <a href='https://disney.scsjonatan.me/' rel='noopener noreferrer' target='_blank'>
        <img alt='Disney' src={disneyImage} />
        <video autoPlay loop playsInline>
          <source src={disneyVideo} type='video/mp4' />
        </video>
      </a>
    </div>
  )
}

export default Disney
