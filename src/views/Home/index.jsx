import React, { useEffect, useState } from 'react'
import Waves from '../../components/Waves/index.jsx'
import './index.css'

const Home = () => {
  const [hue, setHue] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setHue(hue + 1)
    }, 500)
  }, [hue])

  return (
    <section>
      <Waves color={`hsl(${hue}, 100%, 75%)`} />
      <div className='home_container'>
        <h1>Jonatan Santa Cruz</h1>
        <h2>Frontend Developer</h2>
      </div>
    </section>
  )
}

export default Home
