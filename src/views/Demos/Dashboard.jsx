import React from 'react'

import dashboardImage from '../../assets/images/demos/dashboard-demo.png'
import dashboardVideo from '../../assets/videos/dashboard.mp4'

const Dashboard = () => {
  return (
    <div className='demos-list-element'>
      <a href='https://dashboard.scsjonatan.me/' rel='noopener noreferrer' target='_blank'>
        <img alt='Dashboard' src={dashboardImage} />
        <video autoPlay loop playsInline>
          <source src={dashboardVideo} type='video/mp4' />
        </video>
      </a>
    </div>
  )
}

export default Dashboard
