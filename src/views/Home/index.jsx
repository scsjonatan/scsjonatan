import React from 'react'
import Waves from '../../components/Waves/index.jsx'
import './index.css'
import colors from '../../common/styles/colors'
import peaceAndLoveEmoji from '../../assets/images/emojis/peace-and-love.png'

const Home = () => {
  return (
    <section>
      <Waves color={colors.colorPrimaryDark} />
      <div className='home-container container'>
        <div className='row center'>
          <div className='col-6'>
            <img alt='Jonatan Santa Cruz' src={peaceAndLoveEmoji} />
          </div>
          <div className='col-6 personal-data'>
            <h1>Jonatan Santa Cruz</h1>
            <h2>Frontend Developer</h2>
            <p>
              Passion to <b>learn</b>, <b>develop</b> and <b>create</b>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
