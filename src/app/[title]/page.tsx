import { notFound } from "next/navigation"
import Container from "../components/layout/Container"

interface PageProps{
    params: {title: string};
}

const ProjectPage: React.FC<PageProps> = ({ params }) => {
  const projects = process.env.PUBLIC_PROJECTS.split(", ");
  if(!projects.includes(params.title)){
    notFound();
  }

  return (
    <Container>
      <div>
        <p>{params.title}</p>
      </div>
    </Container>
  )
}

export default ProjectPage