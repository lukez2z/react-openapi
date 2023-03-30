import { combineReducers } from "redux";
import configReducer from "./configSlice";
import openaiReducer from "./openaiSlice"
// import dagReducer from './dagReducer'
import { baseApi } from '@/services/base'
import { openAiApi } from '@/services/openai'
import chatReducer from "./chatSlice";

export const rootReducer = combineReducers({
    config: configReducer,
    openai: openaiReducer,
    chat: chatReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [openAiApi.reducerPath]: openAiApi.reducer,
});
