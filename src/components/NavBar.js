import React from 'react'
import { Link } from 'react-scroll'

export default function NavBar() {

  const links = [
    // {
    //   id: 1,
    //   link: 'projects'
    // },
    {
      id: 2,
      link: 'about'
    },
  ]


  return (
    <div className='flex justify-end text-2xl text-white bg-altbg'>
      <ul className="my-10 pr-64">
        <div className="hidden xl:flex">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer font-light">

              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}  
        </div> 
      </ul>
    </div>
  )
}
