// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs } from '@reduxjs/toolkit/query/react'
import type { RootState } from '@/redux/store'
import { OpenAIModelData } from '@/types/openai'
import { CreateCompletionRequest, CreateCompletionResponse, ListModelsResponse, Model } from '@/types/openaiapi'

interface CustomError {
    data: {
        error: {
            code: string
            message: string
            param?: string
            type: string
        }
    },
    status: number
}


// Define a service using a base URL and expected endpoints
export const openAiApi = createApi({
    reducerPath: 'openAiApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.openai.com/v1/',
        prepareHeaders: (headers, { getState }) => {
            const apiKey = (getState() as RootState).config.apiKey

            if (apiKey) {
                headers.set('authorization', `Bearer ${apiKey}`)
            }

            return headers
        },
    }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, {}>,
    endpoints: (builder) => ({
        getModelList: builder.mutation<ListModelsResponse, void>({
            query: () => `models`,
        }),
        createCompletion: builder.mutation<CreateCompletionResponse, CreateCompletionRequest>({
            query: (body) => ({
                url: `completions`,
                method: 'POST',
                body
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetModelListMutation, useCreateCompletionMutation } = openAiApi