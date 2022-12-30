import React from 'react'

export default function Projects() {
  return (
    <div name="projects" className="h-screen w-full bg-altbg text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col">
        <div className="font-light max-w-4xl mx-24 my-24 pt-20">
          {/* <p className='font-mono pb-16 text-xl'>projects</p> */}
            <div className='flex flex-wrap sm:justify-between'>
              <div>
                <p className="text-4xl font-medium">Spotter</p>
                <div className="flex justify-start py-2 text-xl font-medium text-[#A6A6A6]">
                    <p className="pr-4">Swift</p>
                    <p className="pr-4">SwiftUI</p>
                </div>
                <p className='text-3xl py-8 w-64'>Simple iOS app to create workout routines and track fitness progress.</p>
              </div>

              <a href='https://github.com/' target="blank" rel="noreferrer">
                <div class="box-border h-[30rem] w-80 rounded-[20px] bg-altbg-dark grid place-content-center 2xl:h-[34rem]">
                  <p className='font-mono'>wip</p>
                </div>
              </a>
            </div>

        </div>
      </div>
    </div>
  )
}
