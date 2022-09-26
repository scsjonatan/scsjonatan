import React from 'react'
import { createRoot } from 'react-dom/client'
import Home from './views/Home/index.jsx'
import './index.css'
import Experience from './views/Experience/index.jsx'
import Welcome from './views/Welcome/index.jsx'
import Contact from './views/Contact/index.jsx'
import Skills from './views/Skills/index.jsx'
import Demos from './views/Demos/index.jsx'

const container = document.getElementById('app')
const root = createRoot(container)

const App = () => {
  return (
    <>
      <Home />
      <Welcome />
      <Experience />
      <Demos />
      <Skills />
      <Contact />
    </>
  )
}

root.render(<App />)
