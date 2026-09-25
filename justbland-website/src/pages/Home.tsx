import './Home.css'
import Hero from '../components/Hero.tsx'
import ProjectList from '../components/ProjectList.tsx'
import WritingList from '../components/WritingList.tsx'
import projectData from '../data/projectData.ts'
import writingData from '../data/writingData.ts'

function Home() {
    return (
        <div className='home-page'>
            <Hero />

            <div className='contents'>
                <h1>Featured Projects...</h1>
                <ProjectList projects={projectData} />

                <h1>and Writing.</h1>
                <WritingList writings={writingData} />

            </div>
        </div>
    )
}

export default Home;