interface ProjectHeadingProps{
    title: string;
}

const ProjectHeading: React.FC<ProjectHeadingProps> = ({title}) => {
    return (
        <>
            <p className="pl-4 pr-2 text-text-dark text-xl transition ease-in-out group-hover:pointer group-hover:underline">{title}</p>
            <img src="/assets/images/Arrow.svg" alt="external link" className="pt-1 opacity-0 transition ease-in-out group-hover:opacity-100"/>
        </>
    )
}

export default ProjectHeading