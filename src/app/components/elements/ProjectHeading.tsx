interface ProjectHeadingProps{
    title: string;
}

const ProjectHeading: React.FC<ProjectHeadingProps> = ({title}) => {
    return (
        <>
            <p className="text-text-dark text-xl transition ease-in-out group-hover:pointer group-hover:underline">{title}</p>
        </>
    )
}

export default ProjectHeading