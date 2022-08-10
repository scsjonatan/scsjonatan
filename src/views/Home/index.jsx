import React from 'react'
import Waves from '../../components/Waves/index.jsx'
import './index.css'
import colors from '../../common/styles/colors'
import peaceAndLoveEmoji from '../../assets/images/emojis/peace-and-love.png'

const Home = () => {
  return (
    <section className='principal-container'>
      <Waves color={colors.colorPrimaryDark} />
      <div className='secondary-container home-container'>
        <img alt='Jonatan Santa Cruz' src={peaceAndLoveEmoji} />
        <div className='personal-data'>
          <h1>Jonatan Santa Cruz</h1>
          <h2>Frontend Developer</h2>
          <p>
            Passion to <b>learn</b>, <b>develop</b> and <b>create</b>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home
