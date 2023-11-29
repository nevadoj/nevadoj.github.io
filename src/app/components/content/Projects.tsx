import Container from "../layout/Container"
import ProjectEntry from "../elements/ProjectEntry"

export default function Projects(){
    return(
        <>
            <div>
                <Container>
                    <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                        <p className="text-2xl">projects</p>
                    </div>
                </Container>

                <ProjectEntry title="metap3" description="Web app that lets you edit the meta (ID3) tags of audio files." source="sample" languages={["react", "typescript"]}/>
                <ProjectEntry title="b-line" description="Transit app for bus routes in Metro Vancouver." source="https://github.com/nevadoj/B-Line" languages={["swift", "swiftui"]}/>
                <ProjectEntry title="spotter" description="Simple iOS app to create workout routines and track progress." source="https://github.com/nevadoj/SpotterApp" languages={["swift", "swiftui"]}/>
            </div>
        </>
    )
}