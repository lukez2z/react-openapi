import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { OpenAIState } from '@/types/openai';
import { openAiApi } from '@/services/openai'

const initialState: OpenAIState = {
    models: [],
    chatDefaultModel: '',
};

export const openaiSlice = createSlice({
    name: 'config',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setChatModel: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                chatDefaultModel: action.payload,
            }
        }
    },
    extraReducers: builder => {
        builder
            .addMatcher(openAiApi.endpoints.getModelList.matchFulfilled, (state, { payload }) => {
                state.models = payload.data
            })
    }
})

export const { setChatModel } = openaiSlice.actions


// Other code such as selectors can use the imported `RootState` type
export const selectOpenai = (state: RootState) => state.config

export default openaiSlice.reducer
