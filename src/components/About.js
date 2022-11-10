import React from 'react'
import Email from "../assets/images/Email.svg"
import Github from "../assets/images/Github.svg"
import Linkedin from "../assets/images/Linkedin.svg"

export default function About() {
    const socials = [
        {
          id: 1, 
          img: Email,
          alt: "email",
          href: "mailto:josephnevado12@gmail.com"
        },
        {
          id: 2,
          img: Github,
          alt: "github",
          href: "https://github.com/nevadoj"
        },
        {
          id: 3,
          img: Linkedin,
          alt: "linkedin",
          href: "https://linkedin.com/in/joseph-nevado"
        }
      ]


  return (
    <div name="about" className="w-full h-screen bg-altbg text-white sm:py-2">
        <div className="max-w-screen-lg mx-auto bg-altbg">
            <div className="font-light max-w-4xl mx-24 pt-24">
                <p className="text-4xl py-10">
                    Aspiring developer. Interested in design and how it evokes emotion. Currently exploring <span className="font-medium">iOS development</span>.
                </p>

                <p className="text-4xl py-10">
                    Outside of programming, I enjoy playing guitar, listening to music and building mechanical keyboards.
                </p>
            </div>

            <div className="max-w-screen-lg mx-auto bg-altbg py-24">
                <div className="max-w-4xl mx-24 flex justify-between flex-wrap">
                    <div>
                        <div className="-translate-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" strokeWidth={0.2} stroke="currentColor" className="w-14 h-14">
                                <path d="M24 4C16.26 4 10 10.26 10 18C10 28.5 24 44 24 44C24 44 38 28.5 38 18C38 10.26 31.74 4 24 4ZM14 18C14 12.48 18.48 8 24 8C29.52 8 34 12.48 34 18C34 23.76 28.24 32.38 24 37.76C19.84 32.42 14 23.7 14 18Z" fill="white"/>
                                <path d="M24 23C26.7614 23 29 20.7614 29 18C29 15.2386 26.7614 13 24 13C21.2386 13 19 15.2386 19 18C19 20.7614 21.2386 23 24 23Z" fill="white"/>
                            </svg>
                        </div>
                        
                        <h2 className="text-4xl pt-6">Vancouver,</h2>
                        <h2 className="text-4xl pt-2">Canada</h2>
                    </div>

                    <div className="flex justify-evenly pt-8 pl-2 sm:pt-24">
                        {socials.map(({ id, img, alt, href }) => (
                        <a key={id} className="px-2 shrink-0" href={href} target="blank" rel="noreferrer">
                            <img src={img} alt={alt}></img>
                        </a>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>

</div>
  )
}
