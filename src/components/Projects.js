import React from 'react'

export default function Projects() {
  return (
    <div name="projects" className="h-screen w-full bg-altbg text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col">
        <div className="font-light max-w-4xl mx-24 my-24 pt-20">

            <div className='flex flex-wrap sm:justify-between'>
              <div>
                <p className="text-4xl font-medium">Spotter</p>
                <div className="flex justify-start py-2 text-xl font-medium text-[#A6A6A6]">
                    <p className="pr-4">Swift</p>
                    <p className="pr-4">SwiftUI</p>
                </div>
                <p className='text-3xl py-8 w-1/2'>Simple iOS app to create workout routines and track progress.</p>
              </div>

              <div class="box-border h-[34rem] w-1/2 rounded-[20px] bg-altbg-dark">
                <p>hello</p>
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}
