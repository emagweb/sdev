import React from 'react'
import Intro from '../components/Intro'
import About from '../components/About'
import Services from '../components/Services'
import Cta from '../components/Cta'
import Features from '../components/Features'
import Statistic from '../components/Statistic'

function Home() {
  return (
    <>
      <Intro />
      <About />
      <Services />
      <Cta />
      <Features />
      <Statistic />
    </>
  )
}

export default Home