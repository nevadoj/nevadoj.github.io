import React from 'react'

export default function Home() {
  return (
    <div name="home" className="h-screen w-full bg-[#495046] text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">
        <div className="pb-96">
             <h2 className="text-4xl font-medium py-20">Hello 👋</h2>
             <p className="text-4xl">My name is <span className="font-medium">Joseph</span>.</p>
             <p className="text-4xl">I'm a <span className="font-medium">Computer Science</span> undergraduate student</p>
             <p className='text-4xl'>at <span className="font-medium">Simon Fraser University</span>.</p>
        </div>
      </div>
    </div>
  )
}
