// TODO: handle props to display multiple projects

export default function ProjectEntry(){
    return (
        <>
            <div className="flex flex-col items-center w-full pt-12">
                <img src="/assets/images/placeholder.png" alt="project placeholder picture" className="rounded-[30px] w-36 h-36"/>

                <div className="flex flex-col w-full pt-8">
                    <p className="px-4 text-text-dark text-xl">Spotter</p>

                    <div className="flex flex-row px-4 pt-1 text-lg">
                        <p className="pr-2">Swift</p>
                        <p className="pr-2">SwiftUI</p>
                    </div>

                    <p className="px-4 pt-4 font-extralight">Simple iOS app to create fitness routines and track progress.</p>
                </div>
            </div>
        </>
    )
}