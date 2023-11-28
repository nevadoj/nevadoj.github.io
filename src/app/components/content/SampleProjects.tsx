import Container from "../layout/Container"
import ProjectEntry from "../elements/ProjectEntry"
import ProjectHeading from "../elements/ProjectHeading"

export default function SampleProjects(){
    return(
        <>
            <Container>
                <div className="flex justify-center items-start lg:justify-start bg-slate-200">
                    <div className="flex flex-col">
                        <p className="text-2xl pb-4">Projects</p>
                        <p className="text-text-dark text-xl transition ease-in-out group-hover:pointer group-hover:underline">Sampo</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start bg-slate-400">
                    <p>hi</p>
                </div>
            </Container>
        </>
    )
}