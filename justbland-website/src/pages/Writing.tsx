import WritingList from '../components/WritingList';
import writingData from '../data/writingData';
import './Writing.css'

function Writing() {
    return (
        <main className='writing-page'>
            <h1>My Writing</h1>
            <h3>Explanations of computer science, software engineering, and things I'm learning.</h3>
            <hr />

            <WritingList writings={writingData} />
        </main>
    )
}

export default Writing;