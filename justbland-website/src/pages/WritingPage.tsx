import { useParams } from 'react-router-dom'
import writingData from '../data/writingData'
import './WritingPage.css'

function WritingPage() {
    const { slug } = useParams()

    const writing = writingData.find(
        writing => writing.slug === slug
    );

    if (!writing) {
        return <h1>Writing Not Found</h1>
    }

    return (
        <main>
            <article>
                <h1>{writing.title}</h1>
                <h3>
                    Published on: <time dateTime={writing.datetime}>{writing.date}</time>
                </h3>
                <p>{writing.snippet}</p>
            </article>
        </main>
    )
}

export default WritingPage