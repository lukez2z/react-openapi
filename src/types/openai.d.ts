import { Model } from "./openaiapi";


export interface OpenAIModelData {
    created?: number;
    id: string;
    object: string;
    owned_by: string;
    parent?: string;
    root: string;
}


export interface OpenAIState {
    models: Model[];
    chatDefaultModel: string;
}
