import ProjectEntry from "../elements/ProjectEntry"

export default function Projects(){
    return(
        <>
            <div className="flex flex-col items-center sm:items-start w-full">
                <div className="flex flex-col justify-center items-center w-full min-w-5/6">
                    <p className="text-2xl sm:px-20">Projects</p>

                    <ProjectEntry title="Spotter" description="Simple iOS app to create fitness routines and track progress." source="" languages={["Swift", "SwiftUI"]} preview="/assets/images/preview.png"/>
                    <ProjectEntry title="Spotter" description="Simple iOS app to create fitness routines and track progress." source="" languages={["Swift", "SwiftUI"]} preview="/assets/images/preview.png"/>
                </div>
            </div>
        </>
    )
}