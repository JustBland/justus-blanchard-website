import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Home from './pages/Home.tsx'
import Projects from './pages/Projects.tsx'
import ProjectPage from './pages/ProjectPage.tsx'
import Writing from './pages/Writing.tsx'
import WritingPage from './pages/WritingPage.tsx'
import About from './pages/About.tsx'
import './App.css'

function App() {
  return (
    <section className='app-layout'>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="writing/:slug" element={<WritingPage />} />
            <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
    </section>
  )
}

export default App
