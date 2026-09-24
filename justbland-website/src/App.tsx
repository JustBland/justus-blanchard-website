import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Home from './pages/Home.tsx'
import Projects from './pages/Projects.tsx'
import Writing from './pages/Writing.tsx'
import About from './pages/About.tsx'
import './App.css'

function App() {
  return (
    <section className='app-layout'>
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/writing" element={<Writing />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </main>
        <Footer />
    </section>
  )
}

export default App
