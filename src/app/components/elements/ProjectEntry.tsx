import ProjectHeading from "./ProjectHeading";

interface ProjectProps{
    title: string;
    description: string;
    source?: string
    languages: string[];
    preview?: string
}

const ProjectEntry: React.FC<ProjectProps> = ({title, description, source, languages, preview}) => {
    return (
        <>
            <div className="flex flex-col items-center w-full pt-12">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-col lg:px-20">
                        <div className="flex flex-row">
                            {
                                source ? (
                                    <a href={source} target="_blank" rel="noreferrer" className="flex flex-row group">
                                        <ProjectHeading title={title}/>
                                    </a>
                                )
                                : (
                                    <ProjectHeading title={title}/>
                                    )
                                }
                        </div>

                        <div className="flex flex-row px-4 pt-1 text-lg">
                            {languages.map((language, idx) => <p className="pr-2" key={idx}>{language}</p>)}
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <p className="px-4 pt-4 lg:pt-0 font-extralight">{description}</p>
                        <img src={preview ? preview : "/assets/images/placeholder.png"} alt="project placeholder picture" width={700} height={500} className="flex object-cover pt-6 lg:pt-0"/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProjectEntry