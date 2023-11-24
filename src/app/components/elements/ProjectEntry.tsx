// TODO: handle props to display multiple projects

export default function ProjectEntry(){
    return (
        <>
            <div className="flex flex-col items-center w-full pt-16">
                <img src="/assets/images/placeholder.png" alt="project placeholder picture" className="rounded-[30px] w-36 h-36"/>

                <div className="flex flex-col w-full pt-8">
                    <div className="flex flex-row">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="flex flex-row group">
                            <p className="pl-4 pr-2 text-text-dark text-xl transition ease-in-out group-hover:pointer group-hover:underline">Spotter</p>
                            <img src="/assets/images/Arrow.svg" alt="external link" className="pt-1 opacity-0 transition ease-in-out group-hover:opacity-100"/>
                        </a>
                    </div>

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