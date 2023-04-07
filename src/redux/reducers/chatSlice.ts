import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { ChatData, ChatState, ChatType, MessageData, TopicData } from '@/types/chat';
import useModal from 'antd/es/modal/useModal';



const initChatData: ChatData[] = [
    {
        id: 0,
        type: "q&a",
        topic: [{
            id: "0",
            topic: 'default',
            decsription: 'Parsing text, simple classification, address correction, keywords',
            chats: [],
            useModel: 'Ada'
        }]
    },
    {
        id: 1,
        type: "chat",
        topic: [{
            id: "0",
            topic: 'default',
            description: 'Can do any language task with better quality, longer output, and consistent instruction-following. Complex intent, cause and effect, summarization for audience',
            chats: [],
            useModel: 'text-davinci-003'
        }]
    },
    {
        id: 2,
        type: "code",
        topic: [{
            id: "0",
            topic: 'default',
            description: 'Similar capabilities to text-davinci-003 but trained with supervised fine-tuning instead of reinforcement learning.',
            chats: [],
            useModel: 'text-davinci-002'

        }]
    },
    {
        id: 3,
        type: "translation",
        topic: [{
            id: "0",
            topic: 'default',
            description: 'Language translation, complex classification, text sentiment, summarization.',
            chats: [],
            useModel: 'Curie'

        }]
    },
]

const initialState: ChatState = {
    data: initChatData
};

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addChatType: (state, action: PayloadAction<ChatData>) => {
            state.data.push(action.payload)
            return state
        },
        newChatTopic: (state, action: PayloadAction<{ chatType: ChatType, topic: TopicData }>) => {
            const { chatType, topic } = action.payload
            const useModel = state.data.find(c => c.type === chatType)?.topic[0].useModel
            topic.useModel = useModel
            const chat = state.data.find(c => c.type === chatType)
            if (chat) {
                chat.topic.push(topic)
            }
            return state
        },
        deleteChatTopic: (state, action: PayloadAction<{ chatType: ChatType, topicId: string }>) => {
            const { chatType, topicId } = action.payload
            const chat = state.data.find(c => c.type === chatType)
            if (chat) {
                chat.topic = chat.topic.filter(t => t.id !== topicId)
            }
            return state
        },
        editChatTopic: (state, action: PayloadAction<{ chatType: ChatType, topicId: string, update: Partial<TopicData> }>) => {
            const { chatType, topicId, update } = action.payload
            const chat = state.data.find(c => c.type === chatType)
            if (chat) {
                chat.topic = chat.topic.map(t => {
                    if (t.id === topicId) {
                        return {
                            ...t,
                            ...update
                        }
                    }
                    return t
                })
            }
            return state
        },
        addMessage: (state, action: PayloadAction<{ chatType: ChatType, topicId: string, message: Partial<MessageData> }>) => {
            const { chatType, topicId, message } = action.payload
            const chat = state.data.find(c => c.type === chatType)
            if (chat) {
                chat.topic = chat.topic.map(t => {
                    if (t.id === topicId) {
                        return {
                            ...t,
                            chats: [...t.chats, message]
                        }
                    }
                    return t
                })
            }
            return state
        }
    },
})

export const { addChatType, newChatTopic, deleteChatTopic, editChatTopic, addMessage } = chatSlice.actions


// Other code such as selectors can use the imported `RootState` type
export const selectChat = (state: RootState) => state.chat

export default chatSlice.reducer
