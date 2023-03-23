import { useAppSelector } from "@/redux/hooks"
import { selectOpenai } from "@/redux/reducers/openaiSlice"

const useOpenai = () => {
    return useAppSelector(selectOpenai)
}

export default useOpenai