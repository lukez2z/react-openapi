import React, { FC, createContext, useState, useEffect } from "react";
import { ChatType, MessageData, TopicData } from "@/types/chat";
import useChat from "@/hooks/useChat";
import { OpenAiModels } from "@/data/SiteData";
import { useLocation } from "react-router-dom";


interface ISettingsContext {
    currentChatType: ChatType;
    currentTopicId: string;
    setCurrentTopicId: (id: string) => any;
    currentTopicName: string;
    currentTopicModel: any;
}

type Props = {
    children?: React.ReactNode
};



export const ChatContext = createContext<ISettingsContext>({
    currentChatType: 'q&a',
    currentTopicId: '',
    setCurrentTopicId: (id: string) => { },
    currentTopicName: '',
    currentTopicModel: null
});

const ChatProvider: FC<Props> = ({ children }) => {

    const chatData = useChat()

    const location = useLocation()
    const path = location.pathname.split('/')

    const [chatType, setChatType] = useState<ChatType>('q&a')

    useEffect(() => {
        const pathName = path[2] as ChatType
        if (pathName) {
            setChatType(pathName)
        }
    }, [path])



    const [topicId, setTopicId] = useState<string>('0')
    const setCurrentTopicId = (id: string) => {
        setTopicId(id)
    }


    const findcurrentTopicName = () => {
        const topics = chatData.data.find((chat) => chat.type === chatType)?.topic
        const topic: TopicData = topics?.find((topic) => topic.id === topicId.toString())
        if (topic && 'topic' in topic) {
            return topic.topic
        } else {
            return ''
        }
    }

    const [currentTopicName, setCurrentTopicName] = useState(
        findcurrentTopicName()
    )

    const findcurrentTopicModel = () => {
        const topics = chatData.data.find((chat) => chat.type === chatType)?.topic
        const topic: TopicData = topics?.find((topic) => topic.id === topicId.toString())
        return OpenAiModels.find((model) => model.name === topic?.useModel)
    }

    const [currentTopicModel, setcurrentTopicModel] = useState(findcurrentTopicModel())

    useEffect(() => {
        const topics = chatData.data.find((chat) => chat.type === chatType)?.topic
        if (topics) {
            setTopicId(topics[0].id)
        } else {
            setTopicId('0')
        }
    }, [chatType])

    useEffect(() => {
        if (topicId) {
            setCurrentTopicName(findcurrentTopicName())
        } else {
            setCurrentTopicName('default')
        }
    }, [topicId, chatData.data])

    useEffect(() => {
        if (topicId) {
            setcurrentTopicModel(findcurrentTopicModel())
        }
    }, [topicId, chatData.data])


    return (
        <ChatContext.Provider
            value={{
                currentChatType: chatType,
                currentTopicId: topicId,
                setCurrentTopicId: setCurrentTopicId,
                currentTopicName: currentTopicName,
                currentTopicModel: currentTopicModel
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export default ChatProvider;
