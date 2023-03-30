/**
 * 
 * @export
 * @interface ChatCompletionRequestMessage
 */
export interface ChatCompletionRequestMessage {
    /**
     * The role of the author of this message.
     * @type {string}
     * @memberof ChatCompletionRequestMessage
     */
    'role': ChatCompletionRequestMessageRoleEnum;
    /**
     * The contents of the message
     * @type {string}
     * @memberof ChatCompletionRequestMessage
     */
    'content': string;
    /**
     * The name of the user in a multi-user chat
     * @type {string}
     * @memberof ChatCompletionRequestMessage
     */
    'name'?: string;
}

export const ChatCompletionRequestMessageRoleEnum = {
    System: 'system',
    User: 'user',
    Assistant: 'assistant'
} as const;

export type ChatCompletionRequestMessageRoleEnum = typeof ChatCompletionRequestMessageRoleEnum[keyof typeof ChatCompletionRequestMessageRoleEnum];

/**
 * 
 * @export
 * @interface ChatCompletionResponseMessage
 */
export interface ChatCompletionResponseMessage {
    /**
     * The role of the author of this message.
     * @type {string}
     * @memberof ChatCompletionResponseMessage
     */
    'role': ChatCompletionResponseMessageRoleEnum;
    /**
     * The contents of the message
     * @type {string}
     * @memberof ChatCompletionResponseMessage
     */
    'content': string;
}

export const ChatCompletionResponseMessageRoleEnum = {
    System: 'system',
    User: 'user',
    Assistant: 'assistant'
} as const;

export type ChatCompletionResponseMessageRoleEnum = typeof ChatCompletionResponseMessageRoleEnum[keyof typeof ChatCompletionResponseMessageRoleEnum];

/**
 * 
 * @export
 * @interface CreateAnswerRequest
 */
export interface CreateAnswerRequest {
    /**
     * ID of the model to use for completion. You can select one of `ada`, `babbage`, `curie`, or `davinci`.
     * @type {string}
     * @memberof CreateAnswerRequest
     */
    'model': string;
    /**
     * Question to get answered.
     * @type {string}
     * @memberof CreateAnswerRequest
     */
    'question': string;
    /**
     * List of (question, answer) pairs that will help steer the model towards the tone and answer format you\'d like. We recommend adding 2 to 3 examples.
     * @type {Array<any>}
     * @memberof CreateAnswerRequest
     */
    'examples': Array<any>;
    /**
     * A text snippet containing the contextual information used to generate the answers for the `examples` you provide.
     * @type {string}
     * @memberof CreateAnswerRequest
     */
    'examples_context': string;
    /**
     * List of documents from which the answer for the input `question` should be derived. If this is an empty list, the question will be answered based on the question-answer examples.  You should specify either `documents` or a `file`, but not both. 
     * @type {Array<string>}
     * @memberof CreateAnswerRequest
     */
    'documents'?: Array<string> | null;
    /**
     * The ID of an uploaded file that contains documents to search over. See [upload file](/docs/api-reference/files/upload) for how to upload a file of the desired format and purpose.  You should specify either `documents` or a `file`, but not both. 
     * @type {string}
     * @memberof CreateAnswerRequest
     */
    'file'?: string | null;
    /**
     * ID of the model to use for [Search](/docs/api-reference/searches/create). You can select one of `ada`, `babbage`, `curie`, or `davinci`.
     * @type {string}
     * @memberof CreateAnswerRequest
     */
    'search_model'?: string | null;
    /**
     * The maximum number of documents to be ranked by [Search](/docs/api-reference/searches/create) when using `file`. Setting it to a higher value leads to improved accuracy but with increased latency and cost.
     * @type {number}
     * @memberof CreateAnswerRequest
     */
    'max_rerank'?: number | null;
    /**
     * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
     * @type {number}
     * @memberof CreateAnswerRequest
     */
    'temperature'?: number | null;
    /**
     * Include the log probabilities on the `logprobs` most likely tokens, as well the chosen tokens. For example, if `logprobs` is 5, the API will return a list of the 5 most likely tokens. The API will always return the `logprob` of the sampled token, so there may be up to `logprobs+1` elements in the response.  The maximum value for `logprobs` is 5. If you need more than this, please contact us through our [Help center](https://help.openai.com) and describe your use case.  When `logprobs` is set, `completion` will be automatically added into `expand` to get the logprobs. 
     * @type {number}
     * @memberof CreateAnswerRequest
     */
    'logprobs'?: number | null;
    /**
     * The maximum number of tokens allowed for the generated answer
     * @type {number}
     * @memberof CreateAnswerRequest
     */
    'max_tokens'?: number | null;
    /**
     * 
     * @type {CreateAnswerRequestStop}
     * @memberof CreateAnswerRequest
     */
    'stop'?: CreateAnswerRequestStop | null;
    /**
     * How many answers to generate for each question.
     * @type {number}
     * @memberof CreateAnswerRequest
     */
    'n'?: number | null;
    /**
     * Modify the likelihood of specified tokens appearing in the completion.  Accepts a json object that maps tokens (specified by their token ID in the GPT tokenizer) to an associated bias value from -100 to 100. You can use this [tokenizer tool](/tokenizer?view=bpe) (which works for both GPT-2 and GPT-3) to convert text to token IDs. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.  As an example, you can pass `{\"50256\": -100}` to prevent the <|endoftext|> token from being generated. 
     * @type {object}
     * @memberof CreateAnswerRequest
     */
    'logit_bias'?: object | null;
    /**
     * A special boolean flag for showing metadata. If set to `true`, each document entry in the returned JSON will contain a \"metadata\" field.  This flag only takes effect when `file` is set. 
     * @type {boolean}
     * @memberof CreateAnswerRequest
     */
    'return_metadata'?: boolean | null;
    /**
     * If set to `true`, the returned JSON will include a \"prompt\" field containing the final prompt that was used to request a completion. This is mainly useful for debugging purposes.
     * @type {boolean}
     * @memberof CreateAnswerRequest
     */
    'return_prompt'?: boolean | null;
    /**
     * If an object name is in the list, we provide the full information of the object; otherwise, we only provide the object ID. Currently we support `completion` and `file` objects for expansion.
     * @type {Array<any>}
     * @memberof CreateAnswerRequest
     */
    'expand'?: Array<any> | null;
    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids). 
     * @type {string}
     * @memberof CreateAnswerRequest
     */
    'user'?: string;
}
/**
 * @type CreateAnswerRequestStop
 * Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence. 
 * @export
 */
export type CreateAnswerRequestStop = Array<string> | string;

/**
 * 
 * @export
 * @interface CreateAnswerResponse
 */
export interface CreateAnswerResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateAnswerResponse
     */
    'object'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAnswerResponse
     */
    'model'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAnswerResponse
     */
    'search_model'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAnswerResponse
     */
    'completion'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateAnswerResponse
     */
    'answers'?: Array<string>;
    /**
     * 
     * @type {Array<CreateAnswerResponseSelectedDocumentsInner>}
     * @memberof CreateAnswerResponse
     */
    'selected_documents'?: Array<CreateAnswerResponseSelectedDocumentsInner>;
}
/**
 * 
 * @export
 * @interface CreateAnswerResponseSelectedDocumentsInner
 */
export interface CreateAnswerResponseSelectedDocumentsInner {
    /**
     * 
     * @type {number}
     * @memberof CreateAnswerResponseSelectedDocumentsInner
     */
    'document'?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateAnswerResponseSelectedDocumentsInner
     */
    'text'?: string;
}
/**
 * 
 * @export
 * @interface CreateChatCompletionRequest
 */
export interface CreateChatCompletionRequest {
    /**
     * ID of the model to use. Currently, only `gpt-3.5-turbo` and `gpt-3.5-turbo-0301` are supported.
     * @type {string}
     * @memberof CreateChatCompletionRequest
     */
    'model': string;
    /**
     * The messages to generate chat completions for, in the [chat format](/docs/guides/chat/introduction).
     * @type {Array<ChatCompletionRequestMessage>}
     * @memberof CreateChatCompletionRequest
     */
    'messages': Array<ChatCompletionRequestMessage>;
    /**
     * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.  We generally recommend altering this or `top_p` but not both. 
     * @type {number}
     * @memberof CreateChatCompletionRequest
     */
    'temperature'?: number | null;
    /**
     * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.  We generally recommend altering this or `temperature` but not both. 
     * @type {number}
     * @memberof CreateChatCompletionRequest
     */
    'top_p'?: number | null;
    /**
     * How many chat completion choices to generate for each input message.
     * @type {number}
     * @memberof CreateChatCompletionRequest
     */
    'n'?: number | null;
    /**
     * If set, partial message deltas will be sent, like in ChatGPT. Tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message. 
     * @type {boolean}
     * @memberof CreateChatCompletionRequest
     */
    'stream'?: boolean | null;
    /**
     * 
     * @type {CreateChatCompletionRequestStop}
     * @memberof CreateChatCompletionRequest
     */
    'stop'?: CreateChatCompletionRequestStop;
    /**
     * The maximum number of tokens allowed for the generated answer. By default, the number of tokens the model can return will be (4096 - prompt tokens). 
     * @type {number}
     * @memberof CreateChatCompletionRequest
     */
    'max_tokens'?: number;
    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model\'s likelihood to talk about new topics.  [See more information about frequency and presence penalties.](/docs/api-reference/parameter-details) 
     * @type {number}
     * @memberof CreateChatCompletionRequest
     */
    'presence_penalty'?: number | null;
    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model\'s likelihood to repeat the same line verbatim.  [See more information about frequency and presence penalties.](/docs/api-reference/parameter-details) 
     * @type {number}
     * @memberof CreateChatCompletionRequest
     */
    'frequency_penalty'?: number | null;
    /**
     * Modify the likelihood of specified tokens appearing in the completion.  Accepts a json object that maps tokens (specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token. 
     * @type {object}
     * @memberof CreateChatCompletionRequest
     */
    'logit_bias'?: object | null;
    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids). 
     * @type {string}
     * @memberof CreateChatCompletionRequest
     */
    'user'?: string;
}
/**
 * @type CreateChatCompletionRequestStop
 * Up to 4 sequences where the API will stop generating further tokens. 
 * @export
 */
export type CreateChatCompletionRequestStop = Array<string> | string;

/**
 * 
 * @export
 * @interface CreateChatCompletionResponse
 */
export interface CreateChatCompletionResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionResponse
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionResponse
     */
    'object': string;
    /**
     * 
     * @type {number}
     * @memberof CreateChatCompletionResponse
     */
    'created': number;
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionResponse
     */
    'model': string;
    /**
     * 
     * @type {Array<CreateChatCompletionResponseChoicesInner>}
     * @memberof CreateChatCompletionResponse
     */
    'choices': Array<CreateChatCompletionResponseChoicesInner>;
    /**
     * 
     * @type {CreateCompletionResponseUsage}
     * @memberof CreateChatCompletionResponse
     */
    'usage'?: CreateCompletionResponseUsage;
}
/**
 * 
 * @export
 * @interface CreateChatCompletionResponseChoicesInner
 */
export interface CreateChatCompletionResponseChoicesInner {
    /**
     * 
     * @type {number}
     * @memberof CreateChatCompletionResponseChoicesInner
     */
    'index'?: number;
    /**
     * 
     * @type {ChatCompletionResponseMessage}
     * @memberof CreateChatCompletionResponseChoicesInner
     */
    'message'?: ChatCompletionResponseMessage;
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionResponseChoicesInner
     */
    'finish_reason'?: string;
}
/**
 * 
 * @export
 * @interface CreateClassificationRequest
 */
export interface CreateClassificationRequest {
    /**
     * ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them.
     * @type {string}
     * @memberof CreateClassificationRequest
     */
    'model': string;
    /**
     * Query to be classified.
     * @type {string}
     * @memberof CreateClassificationRequest
     */
    'query': string;
    /**
     * A list of examples with labels, in the following format:  `[[\"The movie is so interesting.\", \"Positive\"], [\"It is quite boring.\", \"Negative\"], ...]`  All the label strings will be normalized to be capitalized.  You should specify either `examples` or `file`, but not both. 
     * @type {Array<any>}
     * @memberof CreateClassificationRequest
     */
    'examples'?: Array<any> | null;
    /**
     * The ID of the uploaded file that contains training examples. See [upload file](/docs/api-reference/files/upload) for how to upload a file of the desired format and purpose.  You should specify either `examples` or `file`, but not both. 
     * @type {string}
     * @memberof CreateClassificationRequest
     */
    'file'?: string | null;
    /**
     * The set of categories being classified. If not specified, candidate labels will be automatically collected from the examples you provide. All the label strings will be normalized to be capitalized.
     * @type {Array<string>}
     * @memberof CreateClassificationRequest
     */
    'labels'?: Array<string> | null;
    /**
     * ID of the model to use for [Search](/docs/api-reference/searches/create). You can select one of `ada`, `babbage`, `curie`, or `davinci`.
     * @type {string}
     * @memberof CreateClassificationRequest
     */
    'search_model'?: string | null;
    /**
     * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
     * @type {number}
     * @memberof CreateClassificationRequest
     */
    'temperature'?: number | null;
    /**
     * Include the log probabilities on the `logprobs` most likely tokens, as well the chosen tokens. For example, if `logprobs` is 5, the API will return a list of the 5 most likely tokens. The API will always return the `logprob` of the sampled token, so there may be up to `logprobs+1` elements in the response.  The maximum value for `logprobs` is 5. If you need more than this, please contact us through our [Help center](https://help.openai.com) and describe your use case.  When `logprobs` is set, `completion` will be automatically added into `expand` to get the logprobs. 
     * @type {number}
     * @memberof CreateClassificationRequest
     */
    'logprobs'?: number | null;
    /**
     * The maximum number of examples to be ranked by [Search](/docs/api-reference/searches/create) when using `file`. Setting it to a higher value leads to improved accuracy but with increased latency and cost.
     * @type {number}
     * @memberof CreateClassificationRequest
     */
    'max_examples'?: number | null;
    /**
     * Modify the likelihood of specified tokens appearing in the completion.  Accepts a json object that maps tokens (specified by their token ID in the GPT tokenizer) to an associated bias value from -100 to 100. You can use this [tokenizer tool](/tokenizer?view=bpe) (which works for both GPT-2 and GPT-3) to convert text to token IDs. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.  As an example, you can pass `{\"50256\": -100}` to prevent the <|endoftext|> token from being generated. 
     * @type {object}
     * @memberof CreateClassificationRequest
     */
    'logit_bias'?: object | null;
    /**
     * If set to `true`, the returned JSON will include a \"prompt\" field containing the final prompt that was used to request a completion. This is mainly useful for debugging purposes.
     * @type {boolean}
     * @memberof CreateClassificationRequest
     */
    'return_prompt'?: boolean | null;
    /**
     * A special boolean flag for showing metadata. If set to `true`, each document entry in the returned JSON will contain a \"metadata\" field.  This flag only takes effect when `file` is set. 
     * @type {boolean}
     * @memberof CreateClassificationRequest
     */
    'return_metadata'?: boolean | null;
    /**
     * If an object name is in the list, we provide the full information of the object; otherwise, we only provide the object ID. Currently we support `completion` and `file` objects for expansion.
     * @type {Array<any>}
     * @memberof CreateClassificationRequest
     */
    'expand'?: Array<any> | null;
    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids). 
     * @type {string}
     * @memberof CreateClassificationRequest
     */
    'user'?: string;
}
/**
 * 
 * @export
 * @interface CreateClassificationResponse
 */
export interface CreateClassificationResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateClassificationResponse
     */
    'object'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateClassificationResponse
     */
    'model'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateClassificationResponse
     */
    'search_model'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateClassificationResponse
     */
    'completion'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateClassificationResponse
     */
    'label'?: string;
    /**
     * 
     * @type {Array<CreateClassificationResponseSelectedExamplesInner>}
     * @memberof CreateClassificationResponse
     */
    'selected_examples'?: Array<CreateClassificationResponseSelectedExamplesInner>;
}
/**
 * 
 * @export
 * @interface CreateClassificationResponseSelectedExamplesInner
 */
export interface CreateClassificationResponseSelectedExamplesInner {
    /**
     * 
     * @type {number}
     * @memberof CreateClassificationResponseSelectedExamplesInner
     */
    'document'?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateClassificationResponseSelectedExamplesInner
     */
    'text'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateClassificationResponseSelectedExamplesInner
     */
    'label'?: string;
}
/**
 * 
 * @export
 * @interface CreateCompletionRequest
 */
export interface CreateCompletionRequest {
    /**
     * ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them.
     * @type {string}
     * @memberof CreateCompletionRequest
     */
    'model': string;
    /**
     * 
     * @type {CreateCompletionRequestPrompt}
     * @memberof CreateCompletionRequest
     */
    'prompt'?: CreateCompletionRequestPrompt | null;
    /**
     * The suffix that comes after a completion of inserted text.
     * @type {string}
     * @memberof CreateCompletionRequest
     */
    'suffix'?: string | null;
    /**
     * The maximum number of [tokens](/tokenizer) to generate in the completion.  The token count of your prompt plus `max_tokens` cannot exceed the model\'s context length. Most models have a context length of 2048 tokens (except for the newest models, which support 4096). 
     * @type {number}
     * @memberof CreateCompletionRequest
     */
    'max_tokens'?: number | null;
    /**
     * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.  We generally recommend altering this or `top_p` but not both. 
     * @type {number}
     * @memberof CreateCompletionRequest
     */
    'temperature'?: number | null;
    /**
     * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.  We generally recommend altering this or `temperature` but not both. 
     * @type {number}
     * @memberof CreateCompletionRequest
     */
    'top_p'?: number | null;
    /**
     * How many completions to generate for each prompt.  **Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`. 
     * @type {number}
     * @memberof CreateCompletionRequest
     */
    'n'?: number | null;
    /**
     * Whether to stream back partial progress. If set, tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message. 
     * @type {boolean}
     * @memberof CreateCompletionRequest
     */
    'stream'?: boolean | null;
    /**
     * Include the log probabilities on the `logprobs` most likely tokens, as well the chosen tokens. For example, if `logprobs` is 5, the API will return a list of the 5 most likely tokens. The API will always return the `logprob` of the sampled token, so there may be up to `logprobs+1` elements in the response.  The maximum value for `logprobs` is 5. If you need more than this, please contact us through our [Help center](https://help.openai.com) and describe your use case. 
     * @type {number}
     * @memberof CreateCompletionRequest
     */
    'logprobs'?: number | null;
    /**
     * Echo back the prompt in addition to the completion 
     * @type {boolean}
     * @memberof CreateCompletionRequest
     */
    'echo'?: boolean | null;
    /**
     * 
     * @type {CreateCompletionRequestStop}
     * @memberof CreateCompletionRequest
     */
    'stop'?: CreateCompletionRequestStop | null;
    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model\'s likelihood to talk about new topics.  [See more information about frequency and presence penalties.](/docs/api-reference/parameter-details) 
     * @type {number}
     * @memberof CreateCompletionRequest
     */
    'presence_penalty'?: number | null;
    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model\'s likelihood to repeat the same line verbatim.  [See more information about frequency and presence penalties.](/docs/api-reference/parameter-details) 
     * @type {number}
     * @memberof CreateCompletionRequest
     */
    'frequency_penalty'?: number | null;
    /**
     * Generates `best_of` completions server-side and returns the \"best\" (the one with the highest log probability per token). Results cannot be streamed.  When used with `n`, `best_of` controls the number of candidate completions and `n` specifies how many to return – `best_of` must be greater than `n`.  **Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`. 
     * @type {number}
     * @memberof CreateCompletionRequest
     */
    'best_of'?: number | null;
    /**
     * Modify the likelihood of specified tokens appearing in the completion.  Accepts a json object that maps tokens (specified by their token ID in the GPT tokenizer) to an associated bias value from -100 to 100. You can use this [tokenizer tool](/tokenizer?view=bpe) (which works for both GPT-2 and GPT-3) to convert text to token IDs. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.  As an example, you can pass `{\"50256\": -100}` to prevent the <|endoftext|> token from being generated. 
     * @type {object}
     * @memberof CreateCompletionRequest
     */
    'logit_bias'?: object | null;
    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids). 
     * @type {string}
     * @memberof CreateCompletionRequest
     */
    'user'?: string;
}
/**
 * @type CreateCompletionRequestPrompt
 * The prompt(s) to generate completions for, encoded as a string, array of strings, array of tokens, or array of token arrays.  Note that <|endoftext|> is the document separator that the model sees during training, so if a prompt is not specified the model will generate as if from the beginning of a new document. 
 * @export
 */
export type CreateCompletionRequestPrompt = Array<any> | Array<number> | Array<string> | string;

/**
 * @type CreateCompletionRequestStop
 * Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence. 
 * @export
 */
export type CreateCompletionRequestStop = Array<string> | string;

/**
 * 
 * @export
 * @interface CreateCompletionResponse
 */
export interface CreateCompletionResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateCompletionResponse
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof CreateCompletionResponse
     */
    'object': string;
    /**
     * 
     * @type {number}
     * @memberof CreateCompletionResponse
     */
    'created': number;
    /**
     * 
     * @type {string}
     * @memberof CreateCompletionResponse
     */
    'model': string;
    /**
     * 
     * @type {Array<CreateCompletionResponseChoicesInner>}
     * @memberof CreateCompletionResponse
     */
    'choices': Array<CreateCompletionResponseChoicesInner>;
    /**
     * 
     * @type {CreateCompletionResponseUsage}
     * @memberof CreateCompletionResponse
     */
    'usage'?: CreateCompletionResponseUsage;
}
/**
 * 
 * @export
 * @interface CreateCompletionResponseChoicesInner
 */
export interface CreateCompletionResponseChoicesInner {
    /**
     * 
     * @type {string}
     * @memberof CreateCompletionResponseChoicesInner
     */
    'text'?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateCompletionResponseChoicesInner
     */
    'index'?: number;
    /**
     * 
     * @type {CreateCompletionResponseChoicesInnerLogprobs}
     * @memberof CreateCompletionResponseChoicesInner
     */
    'logprobs'?: CreateCompletionResponseChoicesInnerLogprobs | null;
    /**
     * 
     * @type {string}
     * @memberof CreateCompletionResponseChoicesInner
     */
    'finish_reason'?: string;
}
/**
 * 
 * @export
 * @interface CreateCompletionResponseChoicesInnerLogprobs
 */
export interface CreateCompletionResponseChoicesInnerLogprobs {
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateCompletionResponseChoicesInnerLogprobs
     */
    'tokens'?: Array<string>;
    /**
     * 
     * @type {Array<number>}
     * @memberof CreateCompletionResponseChoicesInnerLogprobs
     */
    'token_logprobs'?: Array<number>;
    /**
     * 
     * @type {Array<object>}
     * @memberof CreateCompletionResponseChoicesInnerLogprobs
     */
    'top_logprobs'?: Array<object>;
    /**
     * 
     * @type {Array<number>}
     * @memberof CreateCompletionResponseChoicesInnerLogprobs
     */
    'text_offset'?: Array<number>;
}
/**
 * 
 * @export
 * @interface CreateCompletionResponseUsage
 */
export interface CreateCompletionResponseUsage {
    /**
     * 
     * @type {number}
     * @memberof CreateCompletionResponseUsage
     */
    'prompt_tokens': number;
    /**
     * 
     * @type {number}
     * @memberof CreateCompletionResponseUsage
     */
    'completion_tokens': number;
    /**
     * 
     * @type {number}
     * @memberof CreateCompletionResponseUsage
     */
    'total_tokens': number;
}
/**
 * 
 * @export
 * @interface CreateEditRequest
 */
export interface CreateEditRequest {
    /**
     * ID of the model to use. You can use the `text-davinci-edit-001` or `code-davinci-edit-001` model with this endpoint.
     * @type {string}
     * @memberof CreateEditRequest
     */
    'model': string;
    /**
     * The input text to use as a starting point for the edit.
     * @type {string}
     * @memberof CreateEditRequest
     */
    'input'?: string | null;
    /**
     * The instruction that tells the model how to edit the prompt.
     * @type {string}
     * @memberof CreateEditRequest
     */
    'instruction': string;
    /**
     * How many edits to generate for the input and instruction.
     * @type {number}
     * @memberof CreateEditRequest
     */
    'n'?: number | null;
    /**
     * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.  We generally recommend altering this or `top_p` but not both. 
     * @type {number}
     * @memberof CreateEditRequest
     */
    'temperature'?: number | null;
    /**
     * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.  We generally recommend altering this or `temperature` but not both. 
     * @type {number}
     * @memberof CreateEditRequest
     */
    'top_p'?: number | null;
}
/**
 * 
 * @export
 * @interface CreateEditResponse
 */
export interface CreateEditResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateEditResponse
     */
    'object': string;
    /**
     * 
     * @type {number}
     * @memberof CreateEditResponse
     */
    'created': number;
    /**
     * 
     * @type {Array<CreateCompletionResponseChoicesInner>}
     * @memberof CreateEditResponse
     */
    'choices': Array<CreateCompletionResponseChoicesInner>;
    /**
     * 
     * @type {CreateCompletionResponseUsage}
     * @memberof CreateEditResponse
     */
    'usage': CreateCompletionResponseUsage;
}
/**
 * 
 * @export
 * @interface CreateEmbeddingRequest
 */
export interface CreateEmbeddingRequest {
    /**
     * ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them.
     * @type {string}
     * @memberof CreateEmbeddingRequest
     */
    'model': string;
    /**
     * 
     * @type {CreateEmbeddingRequestInput}
     * @memberof CreateEmbeddingRequest
     */
    'input': CreateEmbeddingRequestInput;
    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids). 
     * @type {string}
     * @memberof CreateEmbeddingRequest
     */
    'user'?: string;
}
/**
 * @type CreateEmbeddingRequestInput
 * Input text to get embeddings for, encoded as a string or array of tokens. To get embeddings for multiple inputs in a single request, pass an array of strings or array of token arrays. Each input must not exceed 8192 tokens in length. 
 * @export
 */
export type CreateEmbeddingRequestInput = Array<any> | Array<number> | Array<string> | string;

/**
 * 
 * @export
 * @interface CreateEmbeddingResponse
 */
export interface CreateEmbeddingResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateEmbeddingResponse
     */
    'object': string;
    /**
     * 
     * @type {string}
     * @memberof CreateEmbeddingResponse
     */
    'model': string;
    /**
     * 
     * @type {Array<CreateEmbeddingResponseDataInner>}
     * @memberof CreateEmbeddingResponse
     */
    'data': Array<CreateEmbeddingResponseDataInner>;
    /**
     * 
     * @type {CreateEmbeddingResponseUsage}
     * @memberof CreateEmbeddingResponse
     */
    'usage': CreateEmbeddingResponseUsage;
}
/**
 * 
 * @export
 * @interface CreateEmbeddingResponseDataInner
 */
export interface CreateEmbeddingResponseDataInner {
    /**
     * 
     * @type {number}
     * @memberof CreateEmbeddingResponseDataInner
     */
    'index': number;
    /**
     * 
     * @type {string}
     * @memberof CreateEmbeddingResponseDataInner
     */
    'object': string;
    /**
     * 
     * @type {Array<number>}
     * @memberof CreateEmbeddingResponseDataInner
     */
    'embedding': Array<number>;
}
/**
 * 
 * @export
 * @interface CreateEmbeddingResponseUsage
 */
export interface CreateEmbeddingResponseUsage {
    /**
     * 
     * @type {number}
     * @memberof CreateEmbeddingResponseUsage
     */
    'prompt_tokens': number;
    /**
     * 
     * @type {number}
     * @memberof CreateEmbeddingResponseUsage
     */
    'total_tokens': number;
}
/**
 * 
 * @export
 * @interface CreateFineTuneRequest
 */
export interface CreateFineTuneRequest {
    /**
     * The ID of an uploaded file that contains training data.  See [upload file](/docs/api-reference/files/upload) for how to upload a file.  Your dataset must be formatted as a JSONL file, where each training example is a JSON object with the keys \"prompt\" and \"completion\". Additionally, you must upload your file with the purpose `fine-tune`.  See the [fine-tuning guide](/docs/guides/fine-tuning/creating-training-data) for more details. 
     * @type {string}
     * @memberof CreateFineTuneRequest
     */
    'training_file': string;
    /**
     * The ID of an uploaded file that contains validation data.  If you provide this file, the data is used to generate validation metrics periodically during fine-tuning. These metrics can be viewed in the [fine-tuning results file](/docs/guides/fine-tuning/analyzing-your-fine-tuned-model). Your train and validation data should be mutually exclusive.  Your dataset must be formatted as a JSONL file, where each validation example is a JSON object with the keys \"prompt\" and \"completion\". Additionally, you must upload your file with the purpose `fine-tune`.  See the [fine-tuning guide](/docs/guides/fine-tuning/creating-training-data) for more details. 
     * @type {string}
     * @memberof CreateFineTuneRequest
     */
    'validation_file'?: string | null;
    /**
     * The name of the base model to fine-tune. You can select one of \"ada\", \"babbage\", \"curie\", \"davinci\", or a fine-tuned model created after 2022-04-21. To learn more about these models, see the [Models](https://platform.openai.com/docs/models) documentation. 
     * @type {string}
     * @memberof CreateFineTuneRequest
     */
    'model'?: string | null;
    /**
     * The number of epochs to train the model for. An epoch refers to one full cycle through the training dataset. 
     * @type {number}
     * @memberof CreateFineTuneRequest
     */
    'n_epochs'?: number | null;
    /**
     * The batch size to use for training. The batch size is the number of training examples used to train a single forward and backward pass.  By default, the batch size will be dynamically configured to be ~0.2% of the number of examples in the training set, capped at 256 - in general, we\'ve found that larger batch sizes tend to work better for larger datasets. 
     * @type {number}
     * @memberof CreateFineTuneRequest
     */
    'batch_size'?: number | null;
    /**
     * The learning rate multiplier to use for training. The fine-tuning learning rate is the original learning rate used for pretraining multiplied by this value.  By default, the learning rate multiplier is the 0.05, 0.1, or 0.2 depending on final `batch_size` (larger learning rates tend to perform better with larger batch sizes). We recommend experimenting with values in the range 0.02 to 0.2 to see what produces the best results. 
     * @type {number}
     * @memberof CreateFineTuneRequest
     */
    'learning_rate_multiplier'?: number | null;
    /**
     * The weight to use for loss on the prompt tokens. This controls how much the model tries to learn to generate the prompt (as compared to the completion which always has a weight of 1.0), and can add a stabilizing effect to training when completions are short.  If prompts are extremely long (relative to completions), it may make sense to reduce this weight so as to avoid over-prioritizing learning the prompt. 
     * @type {number}
     * @memberof CreateFineTuneRequest
     */
    'prompt_loss_weight'?: number | null;
    /**
     * If set, we calculate classification-specific metrics such as accuracy and F-1 score using the validation set at the end of every epoch. These metrics can be viewed in the [results file](/docs/guides/fine-tuning/analyzing-your-fine-tuned-model).  In order to compute classification metrics, you must provide a `validation_file`. Additionally, you must specify `classification_n_classes` for multiclass classification or `classification_positive_class` for binary classification. 
     * @type {boolean}
     * @memberof CreateFineTuneRequest
     */
    'compute_classification_metrics'?: boolean | null;
    /**
     * The number of classes in a classification task.  This parameter is required for multiclass classification. 
     * @type {number}
     * @memberof CreateFineTuneRequest
     */
    'classification_n_classes'?: number | null;
    /**
     * The positive class in binary classification.  This parameter is needed to generate precision, recall, and F1 metrics when doing binary classification. 
     * @type {string}
     * @memberof CreateFineTuneRequest
     */
    'classification_positive_class'?: string | null;
    /**
     * If this is provided, we calculate F-beta scores at the specified beta values. The F-beta score is a generalization of F-1 score. This is only used for binary classification.  With a beta of 1 (i.e. the F-1 score), precision and recall are given the same weight. A larger beta score puts more weight on recall and less on precision. A smaller beta score puts more weight on precision and less on recall. 
     * @type {Array<number>}
     * @memberof CreateFineTuneRequest
     */
    'classification_betas'?: Array<number> | null;
    /**
     * A string of up to 40 characters that will be added to your fine-tuned model name.  For example, a `suffix` of \"custom-model-name\" would produce a model name like `ada:ft-your-org:custom-model-name-2022-02-15-04-21-04`. 
     * @type {string}
     * @memberof CreateFineTuneRequest
     */
    'suffix'?: string | null;
}
/**
 * 
 * @export
 * @interface CreateImageRequest
 */
export interface CreateImageRequest {
    /**
     * A text description of the desired image(s). The maximum length is 1000 characters.
     * @type {string}
     * @memberof CreateImageRequest
     */
    'prompt': string;
    /**
     * The number of images to generate. Must be between 1 and 10.
     * @type {number}
     * @memberof CreateImageRequest
     */
    'n'?: number | null;
    /**
     * The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`.
     * @type {string}
     * @memberof CreateImageRequest
     */
    'size'?: CreateImageRequestSizeEnum;
    /**
     * The format in which the generated images are returned. Must be one of `url` or `b64_json`.
     * @type {string}
     * @memberof CreateImageRequest
     */
    'response_format'?: CreateImageRequestResponseFormatEnum;
    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids). 
     * @type {string}
     * @memberof CreateImageRequest
     */
    'user'?: string;
}

export const CreateImageRequestSizeEnum = {
    _256x256: '256x256',
    _512x512: '512x512',
    _1024x1024: '1024x1024'
} as const;

export type CreateImageRequestSizeEnum = typeof CreateImageRequestSizeEnum[keyof typeof CreateImageRequestSizeEnum];
export const CreateImageRequestResponseFormatEnum = {
    Url: 'url',
    B64Json: 'b64_json'
} as const;

export type CreateImageRequestResponseFormatEnum = typeof CreateImageRequestResponseFormatEnum[keyof typeof CreateImageRequestResponseFormatEnum];

/**
 * 
 * @export
 * @interface CreateModerationRequest
 */
export interface CreateModerationRequest {
    /**
     * 
     * @type {CreateModerationRequestInput}
     * @memberof CreateModerationRequest
     */
    'input': CreateModerationRequestInput;
    /**
     * Two content moderations models are available: `text-moderation-stable` and `text-moderation-latest`.  The default is `text-moderation-latest` which will be automatically upgraded over time. This ensures you are always using our most accurate model. If you use `text-moderation-stable`, we will provide advanced notice before updating the model. Accuracy of `text-moderation-stable` may be slightly lower than for `text-moderation-latest`. 
     * @type {string}
     * @memberof CreateModerationRequest
     */
    'model'?: string;
}
/**
 * @type CreateModerationRequestInput
 * The input text to classify
 * @export
 */
export type CreateModerationRequestInput = Array<string> | string;

/**
 * 
 * @export
 * @interface CreateModerationResponse
 */
export interface CreateModerationResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateModerationResponse
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof CreateModerationResponse
     */
    'model': string;
    /**
     * 
     * @type {Array<CreateModerationResponseResultsInner>}
     * @memberof CreateModerationResponse
     */
    'results': Array<CreateModerationResponseResultsInner>;
}
/**
 * 
 * @export
 * @interface CreateModerationResponseResultsInner
 */
export interface CreateModerationResponseResultsInner {
    /**
     * 
     * @type {boolean}
     * @memberof CreateModerationResponseResultsInner
     */
    'flagged': boolean;
    /**
     * 
     * @type {CreateModerationResponseResultsInnerCategories}
     * @memberof CreateModerationResponseResultsInner
     */
    'categories': CreateModerationResponseResultsInnerCategories;
    /**
     * 
     * @type {CreateModerationResponseResultsInnerCategoryScores}
     * @memberof CreateModerationResponseResultsInner
     */
    'category_scores': CreateModerationResponseResultsInnerCategoryScores;
}
/**
 * 
 * @export
 * @interface CreateModerationResponseResultsInnerCategories
 */
export interface CreateModerationResponseResultsInnerCategories {
    /**
     * 
     * @type {boolean}
     * @memberof CreateModerationResponseResultsInnerCategories
     */
    'hate': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateModerationResponseResultsInnerCategories
     */
    'hate/threatening': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateModerationResponseResultsInnerCategories
     */
    'self-harm': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateModerationResponseResultsInnerCategories
     */
    'sexual': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateModerationResponseResultsInnerCategories
     */
    'sexual/minors': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateModerationResponseResultsInnerCategories
     */
    'violence': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateModerationResponseResultsInnerCategories
     */
    'violence/graphic': boolean;
}
/**
 * 
 * @export
 * @interface CreateModerationResponseResultsInnerCategoryScores
 */
export interface CreateModerationResponseResultsInnerCategoryScores {
    /**
     * 
     * @type {number}
     * @memberof CreateModerationResponseResultsInnerCategoryScores
     */
    'hate': number;
    /**
     * 
     * @type {number}
     * @memberof CreateModerationResponseResultsInnerCategoryScores
     */
    'hate/threatening': number;
    /**
     * 
     * @type {number}
     * @memberof CreateModerationResponseResultsInnerCategoryScores
     */
    'self-harm': number;
    /**
     * 
     * @type {number}
     * @memberof CreateModerationResponseResultsInnerCategoryScores
     */
    'sexual': number;
    /**
     * 
     * @type {number}
     * @memberof CreateModerationResponseResultsInnerCategoryScores
     */
    'sexual/minors': number;
    /**
     * 
     * @type {number}
     * @memberof CreateModerationResponseResultsInnerCategoryScores
     */
    'violence': number;
    /**
     * 
     * @type {number}
     * @memberof CreateModerationResponseResultsInnerCategoryScores
     */
    'violence/graphic': number;
}
/**
 * 
 * @export
 * @interface CreateSearchRequest
 */
export interface CreateSearchRequest {
    /**
     * Query to search against the documents.
     * @type {string}
     * @memberof CreateSearchRequest
     */
    'query': string;
    /**
     * Up to 200 documents to search over, provided as a list of strings.  The maximum document length (in tokens) is 2034 minus the number of tokens in the query.  You should specify either `documents` or a `file`, but not both. 
     * @type {Array<string>}
     * @memberof CreateSearchRequest
     */
    'documents'?: Array<string> | null;
    /**
     * The ID of an uploaded file that contains documents to search over.  You should specify either `documents` or a `file`, but not both. 
     * @type {string}
     * @memberof CreateSearchRequest
     */
    'file'?: string | null;
    /**
     * The maximum number of documents to be re-ranked and returned by search.  This flag only takes effect when `file` is set. 
     * @type {number}
     * @memberof CreateSearchRequest
     */
    'max_rerank'?: number | null;
    /**
     * A special boolean flag for showing metadata. If set to `true`, each document entry in the returned JSON will contain a \"metadata\" field.  This flag only takes effect when `file` is set. 
     * @type {boolean}
     * @memberof CreateSearchRequest
     */
    'return_metadata'?: boolean | null;
    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids). 
     * @type {string}
     * @memberof CreateSearchRequest
     */
    'user'?: string;
}
/**
 * 
 * @export
 * @interface CreateSearchResponse
 */
export interface CreateSearchResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateSearchResponse
     */
    'object'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSearchResponse
     */
    'model'?: string;
    /**
     * 
     * @type {Array<CreateSearchResponseDataInner>}
     * @memberof CreateSearchResponse
     */
    'data'?: Array<CreateSearchResponseDataInner>;
}
/**
 * 
 * @export
 * @interface CreateSearchResponseDataInner
 */
export interface CreateSearchResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof CreateSearchResponseDataInner
     */
    'object'?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateSearchResponseDataInner
     */
    'document'?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateSearchResponseDataInner
     */
    'score'?: number;
}
/**
 * 
 * @export
 * @interface CreateTranscriptionResponse
 */
export interface CreateTranscriptionResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateTranscriptionResponse
     */
    'text': string;
}
/**
 * 
 * @export
 * @interface CreateTranslationResponse
 */
export interface CreateTranslationResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateTranslationResponse
     */
    'text': string;
}
/**
 * 
 * @export
 * @interface DeleteFileResponse
 */
export interface DeleteFileResponse {
    /**
     * 
     * @type {string}
     * @memberof DeleteFileResponse
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof DeleteFileResponse
     */
    'object': string;
    /**
     * 
     * @type {boolean}
     * @memberof DeleteFileResponse
     */
    'deleted': boolean;
}
/**
 * 
 * @export
 * @interface DeleteModelResponse
 */
export interface DeleteModelResponse {
    /**
     * 
     * @type {string}
     * @memberof DeleteModelResponse
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof DeleteModelResponse
     */
    'object': string;
    /**
     * 
     * @type {boolean}
     * @memberof DeleteModelResponse
     */
    'deleted': boolean;
}
/**
 * 
 * @export
 * @interface Engine
 */
export interface Engine {
    /**
     * 
     * @type {string}
     * @memberof Engine
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof Engine
     */
    'object': string;
    /**
     * 
     * @type {number}
     * @memberof Engine
     */
    'created': number | null;
    /**
     * 
     * @type {boolean}
     * @memberof Engine
     */
    'ready': boolean;
}
/**
 * 
 * @export
 * @interface FineTune
 */
export interface FineTune {
    /**
     * 
     * @type {string}
     * @memberof FineTune
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof FineTune
     */
    'object': string;
    /**
     * 
     * @type {number}
     * @memberof FineTune
     */
    'created_at': number;
    /**
     * 
     * @type {number}
     * @memberof FineTune
     */
    'updated_at': number;
    /**
     * 
     * @type {string}
     * @memberof FineTune
     */
    'model': string;
    /**
     * 
     * @type {string}
     * @memberof FineTune
     */
    'fine_tuned_model': string | null;
    /**
     * 
     * @type {string}
     * @memberof FineTune
     */
    'organization_id': string;
    /**
     * 
     * @type {string}
     * @memberof FineTune
     */
    'status': string;
    /**
     * 
     * @type {object}
     * @memberof FineTune
     */
    'hyperparams': object;
    /**
     * 
     * @type {Array<OpenAIFile>}
     * @memberof FineTune
     */
    'training_files': Array<OpenAIFile>;
    /**
     * 
     * @type {Array<OpenAIFile>}
     * @memberof FineTune
     */
    'validation_files': Array<OpenAIFile>;
    /**
     * 
     * @type {Array<OpenAIFile>}
     * @memberof FineTune
     */
    'result_files': Array<OpenAIFile>;
    /**
     * 
     * @type {Array<FineTuneEvent>}
     * @memberof FineTune
     */
    'events'?: Array<FineTuneEvent>;
}
/**
 * 
 * @export
 * @interface FineTuneEvent
 */
export interface FineTuneEvent {
    /**
     * 
     * @type {string}
     * @memberof FineTuneEvent
     */
    'object': string;
    /**
     * 
     * @type {number}
     * @memberof FineTuneEvent
     */
    'created_at': number;
    /**
     * 
     * @type {string}
     * @memberof FineTuneEvent
     */
    'level': string;
    /**
     * 
     * @type {string}
     * @memberof FineTuneEvent
     */
    'message': string;
}
/**
 * 
 * @export
 * @interface ImagesResponse
 */
export interface ImagesResponse {
    /**
     * 
     * @type {number}
     * @memberof ImagesResponse
     */
    'created': number;
    /**
     * 
     * @type {Array<ImagesResponseDataInner>}
     * @memberof ImagesResponse
     */
    'data': Array<ImagesResponseDataInner>;
}
/**
 * 
 * @export
 * @interface ImagesResponseDataInner
 */
export interface ImagesResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof ImagesResponseDataInner
     */
    'url'?: string;
    /**
     * 
     * @type {string}
     * @memberof ImagesResponseDataInner
     */
    'b64_json'?: string;
}
/**
 * 
 * @export
 * @interface ListEnginesResponse
 */
export interface ListEnginesResponse {
    /**
     * 
     * @type {string}
     * @memberof ListEnginesResponse
     */
    'object': string;
    /**
     * 
     * @type {Array<Engine>}
     * @memberof ListEnginesResponse
     */
    'data': Array<Engine>;
}
/**
 * 
 * @export
 * @interface ListFilesResponse
 */
export interface ListFilesResponse {
    /**
     * 
     * @type {string}
     * @memberof ListFilesResponse
     */
    'object': string;
    /**
     * 
     * @type {Array<OpenAIFile>}
     * @memberof ListFilesResponse
     */
    'data': Array<OpenAIFile>;
}
/**
 * 
 * @export
 * @interface ListFineTuneEventsResponse
 */
export interface ListFineTuneEventsResponse {
    /**
     * 
     * @type {string}
     * @memberof ListFineTuneEventsResponse
     */
    'object': string;
    /**
     * 
     * @type {Array<FineTuneEvent>}
     * @memberof ListFineTuneEventsResponse
     */
    'data': Array<FineTuneEvent>;
}
/**
 * 
 * @export
 * @interface ListFineTunesResponse
 */
export interface ListFineTunesResponse {
    /**
     * 
     * @type {string}
     * @memberof ListFineTunesResponse
     */
    'object': string;
    /**
     * 
     * @type {Array<FineTune>}
     * @memberof ListFineTunesResponse
     */
    'data': Array<FineTune>;
}
/**
 * 
 * @export
 * @interface ListModelsResponse
 */
export interface ListModelsResponse {
    /**
     * 
     * @type {string}
     * @memberof ListModelsResponse
     */
    'object': string;
    /**
     * 
     * @type {Array<Model>}
     * @memberof ListModelsResponse
     */
    'data': Array<Model>;
}
/**
 * 
 * @export
 * @interface Model
 */
export interface Model {
    /**
     * 
     * @type {string}
     * @memberof Model
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof Model
     */
    'object': string;
    /**
     * 
     * @type {number}
     * @memberof Model
     */
    'created': number;
    /**
     * 
     * @type {string}
     * @memberof Model
     */
    'owned_by': string;
}
/**
 * 
 * @export
 * @interface OpenAIFile
 */
export interface OpenAIFile {
    /**
     * 
     * @type {string}
     * @memberof OpenAIFile
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof OpenAIFile
     */
    'object': string;
    /**
     * 
     * @type {number}
     * @memberof OpenAIFile
     */
    'bytes': number;
    /**
     * 
     * @type {number}
     * @memberof OpenAIFile
     */
    'created_at': number;
    /**
     * 
     * @type {string}
     * @memberof OpenAIFile
     */
    'filename': string;
    /**
     * 
     * @type {string}
     * @memberof OpenAIFile
     */
    'purpose': string;
    /**
     * 
     * @type {string}
     * @memberof OpenAIFile
     */
    'status'?: string;
    /**
     * 
     * @type {object}
     * @memberof OpenAIFile
     */
    'status_details'?: object | null;
}
