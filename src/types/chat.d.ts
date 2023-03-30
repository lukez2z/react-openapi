import { CreateCompletionResponseUsage } from "./openaiapi"

export type ChatType = 'basic' | 'code'

export interface MessageData {
    id: string
    created?: number
    messageType: "question" | "answer"
    content?: string
    role?: string
    object?: string;
    model?: string;
    usage?: CreateCompletionResponseUsage
}


export interface TopicData {
    id: string;
    topic: string;
    chats: messageData[];
    description?: string;
}


export interface ChatData {
    id: chatType;
    type: chatType;
    topic: topicData[];
}

export interface ChatState {
    data: ChatData[];
}
