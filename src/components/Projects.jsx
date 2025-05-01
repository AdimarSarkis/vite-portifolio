import React from 'react'
import AnimatedTitle from './AnimatedTitle'
import ProjectCarousel from './ProjectCarousel'



const Projects = () => {
  return (
    <section id='projetos' className='min-h-dvh w-screen
     bg-dark-quaternary text-blue-50'>
      <div className='flex size-full flex-col items-center py-10 pb-24'>
        <AnimatedTitle
            title='Projetos'
            className='text-4xl font-bold text-blue-50'        
        />

        <ProjectCarousel />
      </div>
    </section>
  )
}

export default Projects
