import { Link } from 'react-router-dom'
import myHeadshot from "../assets/Headshot.jpeg"
import './Hero.css'

function Hero() {
    return (
        <div className='hero'>
            <div className='hero-container'>
                <div className='hero-text'>
                    <h1>I don't know why I'm building this website.</h1>
                    <p>My specific interests include backend, systems, performance, audio, and parallel computing.</p>
                    <div className='hero-button-container'>
                        <Link to='/projects' className='work-button'>
                        View My Work
                        </Link>
                        <a href='https://www.github.com/justbland' 
                           target='_blank'
                           className='hero-button'>
                            GitHub
                        </a>
                    </div>
                </div>
                <img className="hero-headshot"
                     alt="Photo of Justus Blanchard, smiling directly at the camera." 
                     src={myHeadshot}/>
            </div>
        </div>
    )
}

export default Hero;