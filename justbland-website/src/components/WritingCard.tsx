import { Link } from 'react-router-dom'
import './WritingCard.css'

type WritingInfo = {
    slug: string;
    title: string;
    date: string;
    snippet: string;
}

function WritingCard({ slug, title, date, snippet }: WritingInfo) {
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