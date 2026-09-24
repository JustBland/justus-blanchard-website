import resume from '../data/Justus-Blanchard-Resume.pdf'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <nav className='footer-button-group'>
                    <a href='https://www.github.com/justbland' 
                       target='_blank'
                       className='footer-button'>
                        GitHub
                    </a>

                    <a className='footer-button'
                       href='https://www.linkedin.com/in/justusblanchard'
                       target='_blank'>
                        LinkedIn
                    </a>
                    
                    <button className="footer-button">justbland8@gmail.com</button>
                    
                    <a className="footer-button"
                       href={resume}
                       target='_blank'>
                        Resume
                    </a> 
                </nav>
                <p>© 2026 Justus Blanchard</p>
            </div>
        </div>
    )
}

export default Footer;