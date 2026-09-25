import './Home.css'
import Hero from '../components/Hero.tsx'
import ProjectList from '../components/ProjectList.tsx'
import WritingCard from '../components/WritingCard.tsx'
import projectData from '../data/projectData.ts'
import writingData from '../data/writingData.ts'

function Home() {

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
                <ProjectList projects={projectData} />

                <h1>and Writing.</h1>
                <div className='home-writing'>
                    {writingElements}
                </div>
            </div>
        </div>
    )
}

export default Home;