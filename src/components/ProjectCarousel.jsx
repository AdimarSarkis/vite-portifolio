'use client'

import React, { useCallback, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from '../lib/embla-autoplay'

const projects = [
  {
    title: "RDM Automação",
    description: "Primeiro projeto WEB profissional para uma empresa de automação comercial",
    image: "/img/projetos/rdm.jpg",
    linkSite: "https://automacaordm.netlify.app/",
    linkGit: "https://github.com/AdimarSarkis/rdm_automacao",
    breve: false,
  },
  {
    title: "Consat'Prev",
    description: "Projeto web realizado para uma empresa de previdência situada no estado de São Paulo",
    image: "/img/projetos/consat.jpg",
    linkSite: "https://consatprev.netlify.app",
    linkGit: "https://github.com/AdimarSarkis/consat",
    breve: false,
  },
  {
    title: "Comentario de livros",
    description: "Primeiro projeto web realizado com html, css e js puros",
    image: "/img/projetos/comentario-livro.png",
    linkSite: "https://comentarios-livros.netlify.app/galeria/galeria.html",
    linkGit: "https://github.com/AdimarSarkis/comentarios-Livros",
    breve: false,
  },
  {
    title: "Protótipo do Portfólio",
    description: "Site desenvolvido como protótipo do portfólio sem framework",
    image: "/img/projetos/prototipo.png",
    linkGit: "https://github.com/AdimarSarkis/Portifolio-html",
    linkSite: "https://prototipohtml.netlify.app",
    breve: false,
  },
  {
    title: "Projeto CRUD de usuários",
    description: "Projeto crud desenvolvido com nextjs e JSON server",
    image: "/img/projetos/crud.png",
    linkGit: "https://github.com/AdimarSarkis/nextjs-crud",
    linkSite: "https://nextjs-crud-rho.vercel.app",
    breve: false,
  },
  {
    title: "Música Favoritas",
    description: "Site desenvolvido com Reactjs com Typescript e graphQL",
    image: "/img/projetos/mufav.png",
    linkGit: "https://github.com/AdimarSarkis/musicasFav",
    linkSite: "https://minhas-musicas-favoritas.netlify.app",
    breve: false,
  },
  {
    title: 'project-api',
    description:"Pequeno projeto para o aprendizado de consumo de API com JSON placeholder com filtro de pesquisa",
    image: "/img/projetos/api-exercice.png",
    linkGit: "https://github.com/AdimarSarkis/project-api-exercice",
    linkSite: "https://post-api-exercice.netlify.app",
    breve: false
  },
  {
    title: 'PlayerMusic',
    description:"Pequeno projeto de player de músicas",
    image: "/img/projetos/playerMusic.png",
    linkGit: "https://github.com/AdimarSarkis/playerMusic",
    linkSite:"https://music-adimar.netlify.app",
    breve: false
  },
  {
    title: '',
    description:"",
    image: "",
    linkGit: "",
    linkSite:"",
    breve: true
  },
]

export default function ProjectCarousel() {
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true }, [autoplay.current])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="w-full bg-dark-quaternary text-white py-10 px-4 flex flex-col items-center">
      <div className="overflow-hidden w-full max-w-5xl" ref={emblaRef}>
        <div className="flex">
          {projects.map((project, index) => (
            <div
              className="embla__slide min-w-full flex flex-col items-center justify-center px-4"
              key={index}
            >
              {!project.breve ? (
                <div className="bg-zinc-900 p-6 rounded-xl shadow-xl w-full max-w-3xl flex flex-col items-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full max-h-80 object-contain rounded mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-center mb-4">{project.description}</p>
                  <div className="flex gap-4">
                    <a
                      href={project.linkSite}
                      target="_blank"
                      className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
                    >
                      VISITAR
                    </a>
                    <a
                      href={project.linkGit}
                      target="_blank"
                      className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
                    >
                      GITHUB
                    </a>
                  </div>
                </div>
              ) : (
                <div className="w-full h-80 flex items-center justify-center text-3xl font-bold text-white/40 border border-dashed border-white rounded-xl">
                  Em Breve
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={scrollPrev}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl"
        >
          ←
        </button>
        <button
          onClick={scrollNext}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl"
        >
          →
        </button>
      </div>
    </section>
  )
}
