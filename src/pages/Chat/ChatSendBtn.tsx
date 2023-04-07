import { useState, useEffect, useContext } from 'react';
import { Input, Button, App, Row, Col, Form } from 'antd';
import { useCreateCompletionMutation } from '@/services/openai';
import useCurrentConfig from '@/hooks/useCurrentConfig';
import { APIKeySettingForm } from './APIKeySettingForm';
import { ChatContext } from './Chat.provider';
import { addMessage } from '@/redux/reducers/chatSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuid4 } from 'uuid'


const { TextArea } = Input;


export const ChatSendBtn = () => {
    const { notification } = App.useApp();

    const { apiKey } = useCurrentConfig()
    const dispatch = useDispatch()


    const { currentChatType, currentTopicId, currentTopicName } = useContext(ChatContext)



    const [question, setQuestion] = useState("")




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

    if (apiKey === "" || !apiKey) return <APIKeySettingForm />

    return (
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

    );
};