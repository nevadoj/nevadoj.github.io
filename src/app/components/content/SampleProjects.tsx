import Container from "../layout/Container"
import ProjectEntry from "../elements/ProjectEntry"
import ProjectHeading from "../elements/ProjectHeading"

export default function SampleProjects(){
    return(
        <>
            <Container>
                <div className="flex justify-center items-start lg:justify-start xl:justify-center lg:col-span-5">
                    <div className="flex flex-col xl:pl-16">
                        <p className="text-2xl pb-4">Projects</p>
                        <p className="text-text-dark text-xl transition ease-in-out group-hover:pointer group-hover:underline">Sampo</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:col-span-7">
                    {/* <ProjectEntry title="Spotter" description="Simple iOS app to create fitness routines and track progress." source="" languages={["Swift", "SwiftUI"]} preview="/assets/images/preview.png"/> */}
                    {/* <ProjectEntry title="Spotter" description="Simple iOS app to create fitness routines and track progress." source="" languages={["Swift", "SwiftUI"]} preview="/assets/images/preview.png"/> */}
                    <p className="text-2xl pb-4 hidden lg:opacity-0 lg:block">Projects</p>
                    <p>hi</p>
                </div>
            </Container>
        </>
    )
}