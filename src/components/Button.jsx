import React from 'react'

const Button = ({title,id, leftIcon, containerClass}) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer
    overflow-hidden rounded-full bg-violeta-300 px-7 py-3 text-black ${containerClass}`} > 
        {leftIcon}
        <span className='relative incline-flex overflow-hidden text-xs uppercase'>
            <div>
                {title}
            </div>
        </span>
    </button>
  )
}

export default Button
