import React from 'react'

export default function NavBar() {
  
  const links = [
    {
      id: 1,
      link: 'projects'
    },
    {
      id: 2,
      link: 'about'
    },
  ]


  return (
    // <div className='flex justify-end items-center w-full h-20 px-4 text-3xl text-white bg-[#495046]'>
    //     {/* <div>
    //         <h1 className='text-3xl font-medium tracking-tight'>Spotter</h1>
    //     </div> */}

    //     {/* change ul classname if want navbar to show on mobile */}
    //     <div className='mx-50'>
    //       <ul className="flex"> 
    //         {links.map(({ id, link }) => (
    //           <li key={id} className="px-3 cursor-pointer font-normal">
    //             {link}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    // </div>

    <div className='flex justify-end text-2xl text-white bg-[#495046]'>
      <ul className="flex mx-20 my-10"> 
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer font-light">
            {link}
          </li>
        ))}
      </ul>
    </div>
  )
}
