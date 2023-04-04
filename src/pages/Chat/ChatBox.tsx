import { createStyles, css } from 'antd-style';
import { useState, KeyboardEvent, useRef, useEffect, useContext } from 'react';
import { Input, Space, Button, App, Row, Col, Form, Empty } from 'antd';
import { useCreateCompletionMutation } from '@/services/openai';
import { Message } from './Message';
import useCurrentConfig from '@/hooks/useCurrentConfig';
import { APIKeySettingForm } from './APIKeySettingForm';
import { MessageData } from '@/types/chat';
import { ChatContext } from './Chat.provider';
import useChat from '@/hooks/useChat';
import { addMessage } from '@/redux/reducers/chatSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuid4 } from 'uuid'

const useStyles = createStyles(({ token }) => ({
    messages: css`
        height: 60vh;
        display: flex;
        flex-direction: column;
        gap: 10px;
        overflow: hidden;
        padding: 10px;
        scrollbar-width: 5px;
        scrollbar-color: ${token.colorInfo};
        &::-webkit-scrollbar {
            width: 5px;
        }
        &::-webkit-scrollbar-track {
            background: ${token.colorBorderBg};
        }
        &::-webkit-scrollbar-thumb {
            background: ${token.colorBorder};
            border-radius: 6px;
        }
        &::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, .35);
        }
        &::-webkit-scrollbar-thumb:active {
            background: rgba(255, 255, 255, .4);
        }
    `,
    message: css`
        background: ${token.colorInfoBg};
        box-shadow: 0 8px 32px 0 ${token.colorBorderBg};
        backdrop-filter: blur(10px);
        border-radius: 10px;
        border: 1px solid ${token.colorBorder};
        color: ${token.colorText};
        padding: 5px 15px;
        max-width: 80%;
        width: fit-content;
        &.self {
            margin-left: auto;
            background: rgba(255, 255, 255, .08);
            --dir: 1 !important;
        }

    `,
    animate: css`
        --dir: -1l;
        animation: message 200ms;
        z-index: 1;
        @keyframes message {
            from {
                transform: translate(calc(var(--dir) * 200%), 300px) scale(0);
            }
            to {
                transform: translate(0, 0) scale(1);
            }
        }
    `,
    input: css`
        width: 100%;
        color: ${token.colorTextBase};
        outline: none;
        padding: 10px 25px;
        background: rgba(255, 255, 255, .20);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(10px);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        transition: background 200ms;
        &:focus {
            background: ${token.colorFillContent};
        }
        &::placeholder {
            color: rgba(255, 255, 255, .5);
        }
    `
}));

const responses = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

const messageInitData: MessageData[] = [
    {
        id: "0",
        messageType: 'answer',
        content: "Let's start"
    },
    {
        id: "1",
        messageType: 'answer',
        content: "This is a basic Chat mode, try sending a quesiton!"
    },
    {
        id: "2",
        messageType: 'question',
        content: "python code example",
    },
    {
        id: "3",
        messageType: 'answer',
        content: "\n\n#This is a Markdown\n\nPython code can be used to generate markdown code. Here is an example:\n\n```python\ndef generate_markdown(heading, text):\n    return '# {}\\n{}'.format(heading, text)\n\nprint(generate_markdown('This is a Markdown', 'Python code can be used to generate markdown code. Here is an example:'))\n```\n\nThe output",
    }
]

const { TextArea } = Input;


export const ChatBox = () => {
    const { styles, cx } = useStyles();
    const { notification } = App.useApp();

    const { apiKey } = useCurrentConfig()
    const dispatch = useDispatch()

    const messageRef = useRef<HTMLDivElement>(null)

    const chatData = useChat()

    const { currentChatType, currentTopicId, topicName } = useContext(ChatContext)

    const updateMessages = () => {
        const topics = chatData.data.find(chat => chat.type === currentChatType)?.topic
        const messages: MessageData[] = topics ? topics.find(topic => topic.id === currentTopicId)?.chats : []
        return messages && messages.length > 0 ? messages : []
    }


    const [messageData, setMessageData] = useState<MessageData[]>(updateMessages())

    useEffect(() => {
        setMessageData(updateMessages)
    }, [currentChatType, currentTopicId, chatData])


    const [question, setQuestion] = useState("")

    const [messageOverflown, setMessageOverflown] = useState(false)

    const onEnterSendQuestion = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter' || question === '') return
        // messageData.push({ text: question, self: true, animate: true })
        setMessageData([...messageData])
        setQuestion('')

        let timer = null
        timer = setTimeout(() => {
            console.log('response')
            addTestResponse()
        }, 3000)
        clearTimeout(timer)
    }

    const addTestResponse = () => {
        const response = responses[Math.floor(Math.random() * responses.length)]
        // messageData.push({ text: response, animate: true })
        setMessageData([...messageData])
    }


    // useEffect add test random response and scroll to bottom
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         if (question === '') {
    //             addTestResponse()
    //         }
    //     }, 3000);

    //     return () => clearTimeout(timer)
    // }, [question])

    useEffect(() => {
        messageRef.current?.scrollTo(0, messageRef.current.scrollHeight)
    }, [messageData])


    const [createCompletion, { isError, isLoading, isSuccess, data, error }] = useCreateCompletionMutation()

    const sendQuestion = () => {
        if (question === '') return
        // messageData.push({ text: question, self: true, animate: true })
        setQuestion('')
        dispatch(addMessage({
            chatType: currentChatType,
            topicId: currentTopicId,
            message: {
                id: uuid4(),
                messageType: 'question',
                content: question,
            }
        }))
        // setMessageData([...messageData])
        createCompletion({
            model: 'text-davinci-003',
            prompt: question,
            max_tokens: 2000,
            temperature: 0.9,
            top_p: 1,
            n: 1,
            stream: false,
            // stop: '\n',
        })
    }

    useEffect(() => {
        if (isSuccess && data) {
            console.log(data)
            // messageData.push({ text: data.choices[0].text, animate: true })
            // setMessageData([...messageData])
            dispatch(addMessage({
                chatType: currentChatType,
                topicId: currentTopicId,
                message: {
                    id: data.id,
                    messageType: 'answer',
                    content: data.choices[0].text,
                    created: data.created,
                    model: data.model,
                    usage: data.usage,
                }
            }))
            setQuestion('')
        }
    }, [isSuccess])

    useEffect(() => {
        if (isError && error) {
            console.log(error)
            if ('data' in error) {
                const data = error.data
                notification.error({
                    message: data.error.message,
                    placement: 'bottomRight'
                })
            }
            if ('status' in error) {
                notification.error({
                    message: error.status,
                    placement: 'bottomRight'
                })
            }
        }
    }, [isError])


    return (
        <Row justify="start" gutter={[6, 6]}>
            <Col span={24}>
                <h3>{topicName}</h3>
            </Col>
            <Col span={24}>
                <div
                    className={styles.messages}
                    ref={messageRef}
                    onAnimationEnd={() => {
                        if (messageOverflown) return;
                        if (messageRef.current!.scrollHeight > messageRef.current!.clientHeight) {
                            messageRef.current!.style["overflowY"] = "auto";
                            setMessageOverflown(true)
                        }
                    }}
                    onResize={() => {
                        if (messageRef.current!.scrollHeight > messageRef.current!.clientHeight) {
                            messageRef.current!.style["overflowY"] = "auto";
                            setMessageOverflown(true)
                        } else setMessageOverflown(false)
                    }}
                >
                    {
                        messageData.length > 0 ?
                            messageData.map((message, index) => (
                                <div key={index} className={cx(styles.message, message.messageType === 'question' && "self", styles.animate)}>
                                    <Message content={message.content} />
                                </div>
                            ))
                            :
                            <Empty />
                    }
                </div>
            </Col>
            {
                apiKey === "" || !apiKey ?
                    <Col>
                        <APIKeySettingForm />
                    </Col>
                    :
                    <>
                        <Col span={20}>
                            <Form.Item label="Prompt" extra="[Enter] for new line, [Shift+Enter] -> Send">
                                <TextArea
                                    showCount
                                    maxLength={1000}
                                    value={question}
                                    autoSize={{ minRows: 2, maxRows: 10 }}
                                    // onKeyUp={onEnterSendQuestion}
                                    onChange={(e) => {
                                        setQuestion(e.target.value)
                                    }}
                                    onKeyUp={(e) => {
                                        if (e.key === 'Enter' && e.shiftKey) {
                                            sendQuestion()
                                        }
                                    }
                                    }
                                    placeholder='Your question..'

                                />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Button
                                loading={isLoading}
                                disabled={question === ''}
                                onClick={sendQuestion}
                            >Send</Button>
                        </Col>
                    </>
            }
        </Row>
    );
};