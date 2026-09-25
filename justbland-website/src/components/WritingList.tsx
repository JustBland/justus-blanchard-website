import type { Writing } from './types/Writing.ts'
import WritingCard from './WritingCard.tsx'
import './WritingList.css'

type WritingListProps = {
    writings: Writing[];
}

function WritingList({ writings }: WritingListProps) {
    return (
        <div className="writing-list">
            {writings.map((writing) => (
                <WritingCard
                    slug={writing.slug}
                    title={writing.title}
                    date={writing.date}
                    snippet={writing.snippet} />
            ))}
        </div>
    )
}

export default WritingList