import rehypeMathjax from 'rehype-mathjax';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { MemoizedReactMarkdown } from '@/layouts/components/Markdown/MemoizedReactMarkdown';
import { CodeBlock } from '@/layouts/components/Markdown/CodeBlock';


export const Message = ({ content }: { content: string }) => {

    console.log(content)

    return (
        <MemoizedReactMarkdown
            // className="prose dark:prose-invert"
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeMathjax]}
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');

                    return !inline ? (
                        <CodeBlock
                            key={Math.random()}
                            language={(match && match[1]) || ''}
                            value={String(children).replace(/\n$/, '')}
                            {...props}
                        />
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    );
                },
                table({ children }) {
                    return (
                        <table className="border-collapse border border-black px-3 py-1 dark:border-white">
                            {children}
                        </table>
                    );
                },
                th({ children }) {
                    return (
                        <th className="break-words border border-black bg-gray-500 px-3 py-1 text-white dark:border-white">
                            {children}
                        </th>
                    );
                },
                td({ children }) {
                    return (
                        <td className="break-words border border-black px-3 py-1 dark:border-white">
                            {children}
                        </td>
                    );
                },
            }}
        >
            {content}
        </MemoizedReactMarkdown>
    );
}