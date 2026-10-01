import ProjectList from '../components/ProjectList';
import projectData from '../data/projectData';
import './Projects.css'

function Projects() {
    return (
        <main className='projects-page'>
            <h1>My Projects</h1>
            <ProjectList projects={projectData}/>

            <section className="website-desc">
                <h2>My Website</h2>
                <hr />
                 <p className='website-project-desc'>
                    This website is also a small project of mine. I built
                    this website as a means to practice frontend development and 
                    wanted to familiarize myself with frontend to better 
                    understand relevant code. I built it using React and Vite,
                    a popular library and framework for web development. Working
                    with these tools also demanded I learn HTML, CSS, and 
                    Typescript.
                </p>
                <p>
                    Coincidentally, my own website provides a platform to 
                    showcase my projects and writing. It is here that I wish 
                    to catalogue my project history so I may monitor my growth 
                    and progress. My personal writing functions similarly, but
                    my overall goal in writing is for it to serve as a reference 
                    regarding topics I explore, for myself and others to use.
                </p>
            </section>
        </main>
    )
}

export default Projects;