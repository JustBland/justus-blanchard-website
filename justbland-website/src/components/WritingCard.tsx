import { Link } from 'react-router-dom'
import type { Writing } from './types/Writing.ts'
import './WritingCard.css'

function WritingCard({ slug, title, date, snippet }: Writing) {
    return (
        <Link to={`/writing/${slug}`} className='writing-link'>
            <section className='writing-card'>
                <h2 className='title'>{title}</h2>
                <h4 className='date'>{date}</h4>
                <p className='snippet'>{snippet}</p>
            </section>
        </Link>
    )
}

export default WritingCard;