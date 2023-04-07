import useChat from "@/hooks/useChat"
import { useContext } from "react"
import { ChatContext } from "./Chat.provider"
import { Tabs } from 'antd';
import { ChatType } from "@/types/chat";

export const ChatTypeTab = () => {

    const chatData = useChat()
    const { setCurrentChatType } = useContext(ChatContext)

    return (
        <Tabs
            defaultActiveKey="q&a"
            // type="card"
            size="large"
            centered
            onChange={(key: ChatType) => setCurrentChatType(key)}
            items={chatData.data.map((chat) => {
                return {
                    key: chat.type,
                    label: chat.type,
                    children: null
                }
            })
            }
        />
    )
}