import WritingList from '../components/WritingList';
import writingData from '../data/writingData';
import './Writing.css'

function Writing() {
    return (
        <div className='writing-page'>
            <h1>My Writing</h1>
            <WritingList writings={writingData} />
        </div>
    )
}

export default Writing;