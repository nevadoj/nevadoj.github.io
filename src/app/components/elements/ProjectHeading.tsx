interface ProjectHeadingProps{
    title: string;
}

export default function ProjectHeading({title}){
    return (
        <>
            <p className="pl-4 pr-2 text-text-dark text-xl transition ease-in-out group-hover:pointer group-hover:underline">{title}</p>
            <img src="/assets/images/Arrow.svg" alt="external link" className="pt-1 opacity-0 transition ease-in-out group-hover:opacity-100"/>
        </>
    )
}