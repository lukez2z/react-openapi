import { useAppSelector } from "@/redux/hooks"
import { selectChat } from "@/redux/reducers/chatSlice"

const useChat = () => {
    return useAppSelector(selectChat)
}

export default useChat