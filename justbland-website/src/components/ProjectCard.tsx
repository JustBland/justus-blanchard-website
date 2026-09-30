import { Link } from 'react-router-dom'
import type { Project } from './types/Project.ts'
import './ProjectCard.css'

function ProjectCard({ slug, img, title, snippet, skills }: Project) {
    return (
        <Link to={`/projects/${slug}`} className='project-link'>
            <section className='project-card'>
                <img src={img.src} alt={img.alt} />

                <h2 className='project-title'>
                    {title}
                </h2>

                <p className='project-snippet'>
                    {snippet}
                </p>

                <p className='project-skills'>
                    {skills}
                </p>
            </section>
        </Link>
    )
}

export default ProjectCard;