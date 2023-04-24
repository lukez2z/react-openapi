
import { FC, memo, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Card, Button } from 'antd'


interface Props {
    language: string;
    value: string;
}

interface languageMap {
    [key: string]: string | undefined;
}

const programmingLanguages: languageMap = {
    javascript: '.js',
    python: '.py',
    java: '.java',
    c: '.c',
    cpp: '.cpp',
    'c++': '.cpp',
    'c#': '.cs',
    ruby: '.rb',
    php: '.php',
    swift: '.swift',
    'objective-c': '.m',
    kotlin: '.kt',
    typescript: '.ts',
    go: '.go',
    perl: '.pl',
    rust: '.rs',
    scala: '.scala',
    haskell: '.hs',
    lua: '.lua',
    shell: '.sh',
    sql: '.sql',
    html: '.html',
    css: '.css',
    // add more file extensions here, make sure the key is same as language prop in CodeBlock.tsx component
};

export const generateRandomString = (length: number, lowercase = false) => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXY3456789'; // excluding similar looking characters like Z, 2, I, 1, O, 0
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return lowercase ? result.toLowerCase() : result;
};


export const CodeBlock: FC<Props> = memo(({ language, value }) => {
    const [isCopied, setIsCopied] = useState<Boolean>(false);
    const copyToClipboard = () => {
        if (!navigator.clipboard || !navigator.clipboard.writeText) {
            return;
        }

        navigator.clipboard.writeText(value).then(() => {
            setIsCopied(true);

            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        });
    };
    const downloadAsFile = () => {
        const fileExtension = programmingLanguages[language] || '.file';
        const suggestedFileName = `file-${generateRandomString(
            3,
            true,
        )}${fileExtension}`;
        const fileName = window.prompt(
            'Enter file name' || '',
            suggestedFileName,
        );

        if (!fileName) {
            // user pressed cancel on prompt
            return;
        }

        const blob = new Blob([value], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = fileName;
        link.href = url;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };
    return (
        <Card title={language} extra={[
            <Button onClick={copyToClipboard}>Copy</Button>,
            <Button onClick={downloadAsFile}>Download</Button>
        ]}>
            <SyntaxHighlighter
                language={language}
                style={oneDark}
                customStyle={{ margin: 0 }}
            >
                {value}
            </SyntaxHighlighter>
        </Card>
    );
});
CodeBlock.displayName = 'CodeBlock';
