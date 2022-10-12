import React, { lazy, Suspense } from 'react'
import './index.css'

const Disney = lazy(() => import('./Disney.jsx'))
const Dashboard = lazy(() => import('./Dashboard.jsx'))

const Demos = () => (
  <section className='principal-container' id='DemosContainer'>
    <div className='secondary-container demos-container'>
      <div className='demos-header'>
        <h2>Demos</h2>
        <p>Some Demos of my work using different technologies...</p>
      </div>
      <div className='demos-list'>
        <Suspense>
          <Disney />
        </Suspense>
        <Suspense>
          <Dashboard />
        </Suspense>
      </div>
    </div>
  </section>
)

export default Demos
