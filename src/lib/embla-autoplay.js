// src/lib/embla-autoplay.js
export default function Autoplay(userOptions = {}) {
    let timer = 0
    let store = {}
    let options
    let carousel
  
    function init(embla) {
      carousel = embla
      options = Object.assign({ delay: 4000 }, userOptions)
      store = { ...options }
  
      if (options.stopOnInteraction) {
        carousel.containerNode().addEventListener('pointerdown', stop, {
          passive: true,
        })
      }
  
      if (options.stopOnMouseEnter) {
        carousel.containerNode().addEventListener('mouseenter', stop)
        carousel.containerNode().addEventListener('mouseleave', play)
      }
  
      carousel.on('pointerDown', stop)
      carousel.on('init', play)
      carousel.on('destroy', destroy)
    }
  
    function play() {
      stop()
      if (!carousel || carousel.destroyed) return
      timer = setTimeout(() => {
        if (carousel && !carousel.destroyed) {
          carousel.scrollNext()
        }
      }, options.delay)
    }
  
    function stop() {
      clearTimeout(timer)
      timer = 0
    }
  
    function destroy() {
      stop()
      carousel.containerNode().removeEventListener('mouseenter', stop)
      carousel.containerNode().removeEventListener('mouseleave', play)
    }
  
    return {
      name: 'autoplay',
      options: userOptions,
      init,
      destroy,
    }
  }
  