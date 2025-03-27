import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import CardSection from './components/CardSection'
import WorkSection from './components/WorkSection'
import SkillSection from './components/SkillSection'
import AboutSection from './components/AboutSection'
import Fotter from './components/Fotter'

const App = () => {
  return (
    <div className='md:p-20 p-10 pb-3'>
      <Nav />
      <Hero />
      <CardSection />
      <WorkSection />
      <SkillSection />
      <AboutSection />
      <Fotter />
    </div>
  )
}

export default App
