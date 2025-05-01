import React, {useRef, useState, useEffect} from 'react'
import '../index.css'
import { TiDownload  } from 'react-icons/ti';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState([]);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);


  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Currículo - ADIMAR.pdf'; // Caminho para o arquivo na pasta public
    link.download = 'Currículo - ADIMAR.pdf'; // Nome do arquivo ao ser baixado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
    setIsLoading(false);
  }

  useEffect(() => {
    if (hasClicked) {
      gsap.set('#next-video', { visibility: 'hidden', scale: 0 });
      gsap.set('#current-video', { scale: 1 });
  
      gsap.set('#next-video', { visibility: 'visible' });
      gsap.to('#next-video', {
        transformOrigin: 'center center',
        scale: 1,
        width: '100%',
        height: '100%',
        duration: 1,
        ease: 'power1.inOut',
        onStart: () => {
          if (nextVideoRef.current) {
            nextVideoRef.current.play();
          }
        },
        onComplete: () => {
          setHasClicked(false);
        },
      });
  
      // Animação do vídeo atual
      gsap.from('#current-video', {
        transformOrigin: 'center center',
        scale: 0,
        duration: 1.5,
        ease: 'power1.inOut',
      });
    }
  }, [hasClicked]);

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  useEffect(() => {
    gsap.set('#video-frame', { 
      clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
      borderRadius: '0 0 40% 10%',
    });


    gsap.from('#video-frame', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      },
    
  })
  });


  

  useEffect(() => {
    if(loadedVideos === totalVideos - 1) {
      setIsLoading(false);

    }
  }, [loadedVideos])


  
  return (
    <div id='home' className='relative h-dvh w-screen overflow-x-hidden'>
      {isLoading && (
        <div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50'>
          <div className="three-body">
            <div className='three-body_dot'></div>
            <div className='three-body_dot'></div>
            <div className='three-body_dot'></div>
          </div>
        </div>
      )}
        <div id="video-frame" className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
            <div>
                <div className="mask-clip-path 
                absolute absolute-center z-50 size-64 cursor-pointer
                overflow-hidden rounded-lg">
                    <div onClick={handleMiniVdClick} className={`
                      origin-center scale-50 opacity-0 transition-all
                      durarion-500 easy-in hover:opacity-100 hover:scale-100`}>
                      <video 
                        ref={nextVideoRef}
                        src={getVideoSrc(upcomingVideoIndex)}
                        loop
                        muted
                        id='current-video'
                        className="size-64 origin-center scale-150
                        brightness-75 object-cover object-center"
                        onLoadedData={handleVideoLoad}
                      />
                    </div>
                </div>

                <video 
                  ref={nextVideoRef}
                  src={getVideoSrc(currentIndex)}
                  loop
                  muted
                  id='next-video'
                  className='absolute-center invisible absolute z-20 size-64
                  brightness-50 object-cover object-center'
                />

                <video 
                  src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                  autoPlay
                  loop
                  muted
                  className='absolute
                  brightness-50 left-0 top-0 size-full object-cover object-center'
                  onLoadedData={handleVideoLoad}
                />     
            </div>

            <h1 className='special-font hero-heading absolute bottom-5
            right-5 z-40 text-light-quaternary'>Portfolio</h1>

            <div className="absolute left-0 top-0 z-40 size-full">
              <div className="mt-24 px-5 sm:px-10">
                <h1 className='special-font hero-heading text-light-secondary'>Adimar Sarkis</h1>
                <p className='mb-5 max-w-75 font-robert-regular text-light-secondary'>Engenheiro de Controle e Automação <br/> Desenvolvedor Front-end </p>
                <a download={true} href='/Currículo - ADIMAR.pdf' onClick={handleDownload}
                  className="group relative z-10 w-fit cursor-pointer
    overflow-hidden rounded-full px-7 py-3 text-black !bg-yellow-300 flex-center gap-1" >{<TiDownload />} Baixe o meu Curriculo</a>
              </div>
            </div>
        </div>
    
        <h1 className='special-font hero-heading absolute bottom-5
            right-5 text-dark-quaternary'>Portfolio</h1>

    </div>
  )
}

export default Hero
