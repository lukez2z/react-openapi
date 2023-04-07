import ReactMarkdown from 'react-markdown'
import RemarkMath from "remark-math";
import RehypeKatex from "rehype-katex";
import RemarkGfm from "remark-gfm";
import RehypePrsim from "rehype-prism-plus";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import "katex/dist/katex.min.css";

// @ts-ignore
const Code = ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '')
    console.log(match)
    console.log(children)
    return !inline && match ? (
        <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={oneDark}
            language={match[1]}
            PreTag="div"
            {...props}
        />
    ) : (
        <code className={className} {...props} >
            {children}
        </code>
    )
}


export const Message = ({ content }: { content?: string }) => {

    return (
            <ReactMarkdown
                remarkPlugins={[RemarkMath, RemarkGfm]}
                // rehypePlugins={[RehypeKatex, [RehypePrsim, { ignoreMissing: true }]]}
                components={{
                    code: Code,
                    pre: Code
                }}
            >
                {content ? content : ""}
            </ReactMarkdown>
    );
}