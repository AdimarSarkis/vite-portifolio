import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Habilidades from './components/Habilidades'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Habilidades />
      <Projects />
      <Contact />
    </main>
  )
}

export default App

