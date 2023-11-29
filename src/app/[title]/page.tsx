import { notFound } from "next/navigation"
import Container from "../components/layout/Container"

interface PageProps{
    params: {title: string};
}

const ProjectPage: React.FC<PageProps> = ({ params }) => {
  return (
    <Container>
      <div>
        <p>{params.title}</p>
      </div>
    </Container>
  )
}

export default ProjectPage

export async function generateStaticParams(){
  const projects = process.env.PUBLIC_PROJECTS.split(", ");
  const params = projects.map((title) => ({ params: { title } }));

  return params;
}