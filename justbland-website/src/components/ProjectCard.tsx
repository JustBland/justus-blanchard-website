import { Link } from 'react-router-dom';
import './ProjectCard.css'

type ProjectInfo = {
    slug: string;
    img: {
        src: string;
        alt: string;
    }
    title: string;
    description: string;
    skills: string;
}

function ProjectCard({ slug, img, title, description, skills }: ProjectInfo) {
    return (
        <Link to={`/projects/${slug}`} className='project-link'>
            <section className='project-card'>
                <img src={img.src} alt={img.alt} />

                <h2 className='project-title'>
                    {title}
                </h2>

                <p className='project-description'>
                    {description}
                </p>

                <p className='project-skills'>
                    {skills}
                </p>
            </section>
        </Link>
    )
}

export default ProjectCard;