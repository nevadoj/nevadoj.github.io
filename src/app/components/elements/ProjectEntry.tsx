// TODO: handle props to display multiple projects
import ProjectHeading from "./ProjectHeading";

interface ProjectProps{
    title: string;
    description: string;
    source?: string
    languages: [string];
}

const ProjectEntry: React.FC<ProjectProps> = ({title, description, source}) => {
    return (
        <>
            <div className="flex flex-col items-center w-full pt-16">
                <img src="/assets/images/placeholder.png" alt="project placeholder picture" className="rounded-[30px] w-36 h-36"/>

                <div className="flex flex-col w-full pt-8">
                    <div className="flex flex-row">
                        {
                            source ? (
                                <a href="https://github.com" target="_blank" rel="noreferrer" className="flex flex-row group">
                                    <ProjectHeading title={"Spotter"}/>
                                </a>
                            )
                            : (
                                <ProjectHeading title={"Sampo"}/>
                            )
                        }
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

export default ProjectEntry