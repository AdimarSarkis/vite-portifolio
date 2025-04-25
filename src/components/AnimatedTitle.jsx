import React, { useEffect, useRef } from "react";
import gsap from "gsap";


const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
          scrub: 0.5,
        },
      })

      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
        ease: 'power2.inOut',
        stagger: 0.02,
      })
    }, containerRef);


    return () => ctx.revert(); // Cleanup function to revert the animation context
  }, [])

  return (
    <div
    ref={containerRef}
      className={`animated-title ${containerClass}`}
    >
      {title.split("<br/>").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} 
              className="animated-word"
              dangerouslySetInnerHTML={{__html: word}} />
          ))}
          
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
