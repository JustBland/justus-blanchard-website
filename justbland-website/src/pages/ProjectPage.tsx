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
        <main className='project-page'>
            <div className='project-banner'>
                <h1>{project.title}</h1>
                <img src={project.img.src} alt={project.img.alt} />
            </div>

            <div className='project-details'>
                <h3>{project.snippet}</h3>

                <p>Skills used: {project.skills}</p>

                {project.repo && 
                    <a href={project.repo} 
                       target='_blank'>
                       View Repository
                </a>}

                <h2>PROBLEM:</h2>
                <p>{project.problem}</p>
            
                <h2>SOLUTION:</h2>
                <p>{project.solution}</p>
            </div>
        </main>
    )
}

export default ProjectPage