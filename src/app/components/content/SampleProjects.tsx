import Container from "../layout/Container"

interface ProjectProps{
    title: string;
    description: string;
    source?: string
    languages: string[];
    preview?: string
}

const SampleProjects: React.FC<ProjectProps> = ({title, description, source, languages, preview}) => {
    return(
        <>
            <Container>
                <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                    <p className="text-2xl pb-12">Projects</p>
                    {
                        source ? (
                            <a href={source} target="_blank" rel="noreferrer" className="flex flex-row w-full group">
                                <p className="text-text-dark text-xl transition ease-in-out group-hover:pointer group-hover:underline pr-1">{title}</p>
                                <img src="/assets/images/Arrow.svg" alt="external link" className="pt-1 opacity-0 transition ease-in-out group-hover:opacity-100"/>
                            </a>
                        )
                        : (
                            <p className="text-text-dark text-xl w-full">{title}</p>
                        )
                    }
                    <div className="flex flex-row pt-1 w-full">
                        {languages.map((language, idx) => <p className="pr-2 last-of-type:pr-0" key={idx}>{language}</p>)}
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                    <div className="hidden pb-12 text-2xl lg:block lg:opacity-0">Spacer</div>
                    <p className="pt-1">{description}</p>
                    <img src={preview ? preview : "/assets/images/placeholder.png"} alt="project placeholder picture" width={700} height={500} className="flex object-cover pt-6 lg:pt-2"/>
                </div>
            </Container>
        </>
    )
}

export default SampleProjects