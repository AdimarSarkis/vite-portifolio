import React from "react";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => {
  return (
    <div className={clipClass}>
      <img src={src} alt="contact-1" />
    </div>
  );
};

const Contact = () => {
  return (
    <div id="contato" className="my-20 min-h-96 w-screen px-10">
      <div
        className="relative rounded-lg bg-dark-quaternary
      py-24 text-blue-50 sm:overflow-hidden"
      >
        <div
          className="absolute -left-20 top-0 hidden h-full w-72
        overflow-hidden sm:block lg:left-20 lg:w-96"
        >
          <ImageClipBox
            src="img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40
            translate-y-60"
          />
        </div>

        <div
          className="absolute -top-40 left-20 w-60
        sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80"
        >
          <ImageClipBox
            src="img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
            <p className="font-general text-[20px] uppercase max-sm:hidden">
                Entre em contato comigo
            </p>

            <p className="special-font mt-10 w-full max-sm:mt-15
            font-zentry text-5xl leading-[0.9] mD:tex-[6rem]"
            >
                Vamos trabalhar juntos
            </p>

            <a 
                
                className={`group relative z-10 w-fit cursor-pointer
    overflow-hidden rounded-full bg-blue-50 px-7 py-3 text-black mt-10`}
                href="https://wa.me/5568999899039"
                target="_blank"
            >Me contate</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
