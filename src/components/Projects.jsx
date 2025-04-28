import React from 'react'
import AnimatedTitle from './AnimatedTitle'

const Projects = () => {
  return (
    <section id='projetos' className='min-h-dvh w-screen
     bg-dark-quaternary text-blue-50'>
      <div className='flex size-full flex-col items-center py-10 pb-24'>
        <AnimatedTitle
            title='Projetos'
            className='text-4xl font-bold text-blue-50'        
        />

        <div className='relative size-full'>
            <AnimatedTitle
                title='Comentarios de <br/> livros'
                containerClass='mt-10 pointer-events-none !text-7xl
                mix-blend-difference relative z-10'
            />

            <div className='project-img-container' >
                <div className='project-img-mask'>
                    <div className='project-img-content'>
                        <img 
                        src='/img/projetos/comentario-livro.png' 
                        alt='Comentarios de livros'
                         className='object-contain' />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
