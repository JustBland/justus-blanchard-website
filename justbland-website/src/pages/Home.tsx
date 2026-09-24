import './Home.css'
import Hero from '../components/Hero.tsx'
import ProjectCard from '../components/ProjectCard.tsx'
import WritingCard from '../components/WritingCard.tsx'
import projectData from '../data/projectData.ts'
import writingData from '../data/writingData.ts'

function Home() {
    const projectElements = projectData.map((project) => {
        return (
            <ProjectCard
                slug={project.slug}
                img={project.img}
                title={project.title}
                description={project.description}
                skills={project.skills} />
        )
    })

    const writingElements = writingData.map((writing) => {
        return (
            <WritingCard
                slug={writing.slug}
                title={writing.title}
                date={writing.date}
                snippet={writing.snippet} />
        )
    })

    return (
        <div className='home-page'>
            <Hero />

            <div className='contents'>
                <h1>Featured Projects...</h1>
                <div className='body-projects'>
                    {projectElements}
                </div>

                <h1>and Writing.</h1>
                <div className='body-writing'>
                    {writingElements}
                </div>
            </div>
        </div>
    )
}

export default Home;