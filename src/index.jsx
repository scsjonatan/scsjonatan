import React from 'react'
import ReactDOM from 'react-dom'
import Home from './views/Home/index.jsx'
import './index.css'
import Experience from './views/Experience/index.jsx'
import Welcome from './views/Welcome/index.jsx'

const App = () => {
  return (
    <>
      <Home />
      <Welcome />
      <Experience />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
