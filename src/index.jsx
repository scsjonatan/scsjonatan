import React from 'react'
import ReactDOM from 'react-dom'
import Home from './views/Home/index.jsx'
import './index.css'
import Experience from './views/Experience/index.jsx'
import Welcome from './views/Welcome/index.jsx'
import Contact from './views/Contact/index.jsx'
import Skills from './views/Skills/index.jsx'

const App = () => {
  return (
    <>
      <Home />
      <Welcome />
      <Skills />
      <Experience />
      <Contact />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
