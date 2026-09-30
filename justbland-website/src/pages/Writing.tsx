import WritingList from '../components/WritingList';
import writingData from '../data/writingData';
import './Writing.css'

function Writing() {
    return (
        <main className='writing-list'>
            <h1>My Writing</h1>
            <WritingList writings={writingData} />
        </main>
    )
}

export default Writing;