import type { Project } from './types/Project.ts'
import ProjectCard from './ProjectCard.tsx'
import './ProjectList.css'

type ProjectListProps = {
    projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
    return (
        <div className="project-list">
            {projects.map((project) => (
                <ProjectCard
                    slug={project.slug}
                    img={project.img}
                    title={project.title}
                    description={project.description}
                    skills={project.skills} />
            ))}
        </div>
    )
}

export default ProjectList