import { useParams } from 'react-router-dom'
import projectData from '../data/projectData'
import './ProjectPage.css'

function ProjectPage() {
    const { slug } = useParams()

    const project = projectData.find(
        project => project.slug === slug
    );

    if (!project) {
        return <h1>Project Not Found</h1>
    }

    return (
        <main>
            <img src={project.img.src} alt={project.img.alt} />
            <h1>{project.title}</h1>

            <h2>PROBLEM:</h2>
            
            <h2>SOLUTION:</h2>
        </main>
    )
}

export default ProjectPage