import ProjectEntry from "../elements/ProjectEntry"

export default function Projects(){
    return(
        <>
            <div className="flex flex-col items-center sm:items-start w-full">
                <div className="flex flex-col justify-center items-center mx-auto lg:flex-row">
                    <p className="text-2xl sm:px-20">Projects</p>

                    <div className="flex flex-col hidden lg:px-20 lg:block">
                        <p className="pt-6 pb-2 text-center sm:text-left opacity-0">My name is <span className="text-text-dark">Joseph</span>.</p>
                        <p className="text-center sm:text-left opacity-0">I'm a <span className="text-text-dark">Computer Science</span> undergraduate student at <span className="text-text-dark">Simon Fraser University</span>.</p>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <ProjectEntry title="Spotter" description="Simple iOS app to create fitness routines and track progress." source="" languages={["Swift", "SwiftUI"]} preview="/assets/images/preview.png"/>
                    <ProjectEntry title="Spotter" description="Simple iOS app to create fitness routines and track progress." source="" languages={["Swift", "SwiftUI"]} preview="/assets/images/preview.png"/>
                </div>
            </div>
        </>
    )
}