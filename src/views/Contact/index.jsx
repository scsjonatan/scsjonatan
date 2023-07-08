import React from 'react'
import github from '../../assets/images/icons/icon-github.svg'
import linkedin from '../../assets/images/icons/icon-linkedin.svg'
import contactEmoji from '../../assets/images/emojis/contact.png'
import './index.css'

const Contact = () => (
  <section className='principal-container' id='ContactSection'>
    <div className='secondary-container contact-container'>
      <img alt='Contact me' className='contact-emoji' src={contactEmoji} />
      <div>
        <p>scsjonatan@gmail.com</p>
      </div>
      <ul>
        <li>
          <a href='https://github.com/scsjonatan' rel='noopener noreferrer' target='_blank'>
            <img alt='GitHub Account' src={github} />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/jonatan-santa-cruz-b14bb1110/' rel='noopener noreferrer' target='_blank'>
            <img alt='LinkedIn Profile' src={linkedin} />
          </a>
        </li>
      </ul>
    </div>
  </section>
)

export default Contact
