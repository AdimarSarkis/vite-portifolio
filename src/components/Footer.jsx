import React from 'react'
import { FaGithub, FaLinkedinIn, FaWhatsapp} from 'react-icons/fa';

const links = [
    { href: "https://github.com/AdimarSarkis", icon: <FaGithub/> },
    { href: "https://www.linkedin.com/in/adimar-sarkis/",icon: <FaLinkedinIn /> },
    { href:"https://wa.me/5568999899039",icon: <FaWhatsapp />}
];


const Footer = () => {
  return (
    <footer className='flex-center w-screen bg-dark-quaternary py-10 text-blue-50'>
        <div className='container mx-auto flex flex-col items-center
         justify-between gap-4 px-4 md:flex-row'>
            <p className='text-center text-sm font-general md:text-left'>
                &copy; {new Date().getFullYear()} Desenvolvido por Adimar. All rights reserved for Zentry.
            </p>

            <div className='flex justify-center gap-4 md:justify-start'>
                {links.map((link) => (
                    <a key={link} href={link.href} target="_blank" rel="noopener noreferrer"
                        className='text-blue-50 text-2xl transition-colors duration-500 ease-in-out hover:text-amareloLima-300'
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    </footer>

  )
}

export default Footer
