import { useParams } from 'react-router-dom'
import writingData from '../data/writingData';
import './WritingPage.css'

// This renderer is made possible by react-markdown and react-gfm, two
// wonderful tools that allow me to pull .md files from Obsidian and render
// them as articles in my website with little work.
//
// Found at https://github.com/remarkjs/react-markdown
// and      https://github.com/remarkjs/remark-gfm
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  content: string;
}

function MarkdownRenderer({ content }: Props) {
  return (
    <article className="markdown-content">
      <Markdown remarkPlugins={[remarkGfm]}>
        {content}
      </Markdown>
    </article>
  );
}

const writings = import.meta.glob(
  "../writings/*.md",
  {
    query: "?raw",
    import: "default",
    eager: true,
  }
) as Record<string, string>;

function WritingPage() {
    const { slug } = useParams()
    const writing = writings[`../writings/${slug}.md`];
    const data = writingData.find(data => data.slug === slug);
    
    if (!writing) { return <h1>Writing Not Found</h1> }

    return (
        <div className='writing-details'>
            <h3 className='writing-date'>{data?.date}</h3>
            <h1 className='writing-title'>{data?.title}</h1>
            <MarkdownRenderer content={writing} />
        </div>
    )
}

export default WritingPage