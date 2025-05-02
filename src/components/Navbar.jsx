import React, { useEffect, useRef, useState } from 'react'
import { TiLocation } from 'react-icons/ti';
import Button from './Button';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

const Navbar = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);


    const navContainerRef = useRef(null);
    const audioElementRef = useRef(null);

    const {
        y: currentScrollY
    } = useWindowScroll();
    const navItems = [
        'Home', 'Sobre', 'Habilidades', 'Projetos'
    ]
    

    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev)=> !prev);
        setIsIndicatorActive((prev)=> !prev);
    }

    useEffect(() => {
        if(currentScrollY === 0){
            setIsNavbarVisible(true);
            navContainerRef.current.classList.remove('floating-nav')
        } else if(currentScrollY > lastScrollY) {
            setIsNavbarVisible(false);
            navContainerRef.current.classList.add('floating-nav')
        } else if(currentScrollY < lastScrollY) {
            setIsNavbarVisible(true);
            navContainerRef.current.classList.add('floating-nav')
        }
        
        setLastScrollY(currentScrollY);
    },[currentScrollY, lastScrollY]);


    useEffect(() => { // ANIMATION GSAP
        gsap.to(navContainerRef.current, {
            y: isNavbarVisible ? 0 : -100,
            opacity: isNavbarVisible ? 1 : 0,
            duration: 0.2
        })
    },[isNavbarVisible]);



    useEffect(() => {
        if(isAudioPlaying) {
            audioElementRef.current.volume = 0.1;
            audioElementRef.current.play();
        }else {
            audioElementRef.current.pause();
        }
    },[isAudioPlaying]);


  return (
    <div
    ref={navContainerRef}
    className='fixed inset-x-0 top-4 z-50 h-16 border-none
    transition-all duration-700 sm:inset-x-6'>
      <header className='absolute top-1/2 w-full -translate-y-1/2'>
        <nav className='flex size-full items-center justify-between p-4 '>
            <div className='flex items-center gap-7'>
                <img src='/img/eu zzz.png' alt='logo' className='w-10 h-10 rounded-full object-cover' />
                <a
                    className='group relative z-10 w-fit cursor-pointer
    overflow-hidden rounded-full px-7 py-3 text-black
                    !bg-blue-50 md:flex hidden items-center
                       justify-center gap-1'
                        href={`#contato`}
                   
                >contato</a>
            </div>

            <div className='flex h-full items-center'>
                <div className='hidden md:block'>
                    {navItems.map((item) => (
                            <a key={item}
                            href={`#${item.toLowerCase()}`}
                             className='nav-hover-btn'>
                                {item}
                            </a>
                        )   
                    )}
                </div>
                
                <button
                onClick={toggleAudioIndicator}
                className='ml-10 flex items-center space-x-0.5'>
                    <audio 
                    ref={audioElementRef}
                    src='public/audio/Glory.mp3'
                    loop
                     className='hidden' />
                        <div className='flex flex-row p-4 cursor-pointer'>
                            {[1,2,3,4].map((bar)=> (
                                <div key={bar} 
                                className={`indicator-line cursor-pointer
                                ${isIndicatorActive ? 'active' : ''}`} 
                                style={{ animationDelay: `${bar * 0.1}s` }}
                                />
                            ))}
                        </div>
                  
                </button>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
