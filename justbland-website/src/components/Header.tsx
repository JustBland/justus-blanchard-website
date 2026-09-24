import { Link } from 'react-router-dom';
import resumePdf from '../data/Justus-Blanchard-Resume.pdf'
import './Header.css'

function Header() {
    return (
        <header className='header'>
            <div className='header-title'>
                <Link to='/' className="header-name">
                    Justus Blanchard
                </Link>
                
                <h3>Computer Science Student.</h3>
            </div>

            <nav className='nav'>
                <Link to='/Projects' className="nav-button">
                    Projects
                </Link>
                
                <Link to='/Writing' className="nav-button">
                    Writing
                </Link>
                
                <Link to='/About' className="nav-button">
                    About
                </Link>
                
                <a className="resume-button"
                   href={resumePdf} 
                   target='_blank' 
                   rel='noopener noreferrer'>
                    Resume
                </a>
            </nav>
        </header>
    )
}

export default Header;