import React from 'react'
import './index.css'
import welcomeEmoji from '../../assets/images/emojis/welcome.png'

const Welcome = () => {
  return (
    <section className='principal-container' id='WelcomeSection'>
      <div className='welcome-content secondary-container'>
        <h2>Welcome!</h2>
        <p>Here is my website, you will find information about me, my work and more...</p>
        <p>
          This is a <b>living project</b>, so if is your second time here may be there is something new for you.
        </p>
      </div>
      <img alt='Welcome to Jonatan' src={welcomeEmoji} />
    </section>
  )
}

export default Welcome
