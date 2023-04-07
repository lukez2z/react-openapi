import React, { FC, createContext, useState, useEffect } from "react";
import { ChatType, MessageData, TopicData } from "@/types/chat";
import useChat from "@/hooks/useChat";


interface ISettingsContext {
    currentChatType: ChatType;
    setCurrentChatType: (name: ChatType) => any;
    currentTopicId: string;
    setCurrentTopicId: (id: string) => any;
    topicName: string;

}

type Props = {
    children?: React.ReactNode
};



export const ChatContext = createContext<ISettingsContext>({
    currentChatType: 'q&a',
    setCurrentChatType: (name: ChatType) => { },
    currentTopicId: '',
    setCurrentTopicId: (id: string) => { },
    topicName: ''
});

const ChatProvider: FC<Props> = ({ children }) => {

    const chatData = useChat()

    const [chatType, setChatType] = useState<ChatType>('q&a')
    const setCurrentChatType = (name: ChatType) => {
        setChatType(name)
    }

    const [topicId, setTopicId] = useState<string>('0')
    const setCurrentTopicId = (id: string) => {
        setTopicId(id)
    }


    const findTopicName = () => {
        const topics = chatData.data.find((chat) => chat.type === chatType)?.topic
        const topic: TopicData = topics?.find((topic) => topic.id === topicId.toString())
        if (topic && 'topic' in topic) {
            return topic.topic
        } else {
            return ''
        }
    }

    const [topicName, setTopicName] = useState(
        findTopicName()
    )

    useEffect(() => {
        const topics = chatData.data.find((chat) => chat.type === chatType)?.topic
        if (topics) {
            setTopicId(topics[0].id)
        } else {
            setTopicId('0')
        }
    }, [chatType])

    useEffect(() => {
        console.log(topicId)
        if (topicId) {
            setTopicName(findTopicName())
        } else {
            setTopicName('default')
        }
    }, [topicId, chatData.data])



    return (
        <ChatContext.Provider
            value={{
                currentChatType: chatType,
                setCurrentChatType: setCurrentChatType,
                currentTopicId: topicId,
                setCurrentTopicId: setCurrentTopicId,
                topicName: topicName
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export default ChatProvider;
