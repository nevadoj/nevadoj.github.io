import Container from "../layout/Container";

interface ProjectProps{
    title: string;
    description: string;
    source?: string
    languages: string[];
    preview?: string
}

const ProjectEntry: React.FC<ProjectProps> = ({title, description, source, languages, preview}) => {
    return (
        <Container>
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start pt-12">
                {
                    source ? (
                        <a href={source} target="_blank" rel="noreferrer" className="flex flex-row w-full group">
                            <p className="text-text-dark text-xl transition ease-in-out group-hover:pointer group-hover:underline">{title}</p>
                            <img src="/assets/images/Arrow.svg" alt="external link" className="pt-1 pl-1 opacity-0 transition ease-in-out group-hover:opacity-100"/>
                        </a>
                    )
                    : (
                        <p className="text-text-dark text-xl w-full">{title}</p>
                    )
                }
                <div className="flex flex-row w-full pt-2">
                    {languages.map((language, idx) => <p className="pr-2 last-of-type:pr-0" key={idx}>{language}</p>)}
                </div>
            </div>

            <div className="flex flex-col justify-start items-start lg:pt-12 lg:pb-12">
                <p className="pt-1">{description}</p>
                <img src={preview ? preview : "/assets/images/placeholder.png"} alt="project placeholder picture" width={640} height={480} className="flex object-cover pt-6 lg:pt-3"/>
            </div>
        </Container>
    )
}

export default ProjectEntry