import Container from "../layout/Container"
import ProjectEntry from "../elements/ProjectEntry"

export default function Projects(){
    return(
        <>
            <div>
                <Container>
                    <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                        <p className="text-2xl">Projects</p>
                    </div>
                </Container>

                <ProjectEntry title="Spotter" description="Simple iOS app to create fitness routines and track progress." source="asdf" languages={["Swift", "SwiftUI"]} preview=""/>
                <ProjectEntry title="Spotter" description="Simple iOS app to create fitness routines and track progress." source="asdf" languages={["Swift", "SwiftUI"]} preview="/assets/images/preview.png"/>
            </div>
        </>
    )
}