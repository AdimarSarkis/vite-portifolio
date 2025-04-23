import React from 'react'
import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const About = () => {

  useGSAP(() => {

    
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      }
    })

    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0
    })

  }, [])


  return (
    <div id='about' className='min-h-screen w-screen'>
      <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
        <h2 className='font-general text-lg font-bold uppercase md:text-[20px]'>Sobre mim</h2>
      
        <div className='mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]'>
          Oi! Eu sou o A<b>d</b>imar, engenheiro de Contr<b>o</b>le e Automação apaixonado por tecnologia 
        </div>

        <div className=' w-screen p-7 text-center font-circular-web text-lg md:max-w-[90rem]'>
          <p>Depois de me formar pela UTFPR e passar um tempo metendo a mão na massa em manutenção de automação industrial, 
    descobri que também curto transformar dados em decisões, processos em sistemas e ideias em código.
</p>
            <p> Já desenvolvi soluções usando Node-RED, trabalhei com supervisórios, automação de processos, e também 
    mergulhei de cabeça no mundo do desenvolvimento web com React, Next.js e um toque de motion design. 
    Curioso por natureza, estou sempre aprendendo alguma coisa nova — seja um framework, uma linguagem, 
    ou uma maneira diferente de enxergar um problema.</p>
        </div>
      </div>
      <div className='h-dvh w-screen' id='clip'>
        <div className='mask-clip-path about-image'>
          <img 
            src='img/about.webp'
            alt='Background'
            className='absolute left-0 top-0 size-full object-cover'
          /> 
        </div>
      </div>
    </div>
  )
}

export default About
