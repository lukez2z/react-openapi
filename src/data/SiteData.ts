export const SiteDefaultData = {
    siteName: "AI Hub",
}

export const SiteThemeDefaultToken = {
    "colorPrimary": "#00adb5",
    "colorSuccess": "#45991f",
    "colorWarning": "#d9b216",
    "colorError": "#e05843",
    "colorInfo": "#1668dc",
    "fontSize": 12,
    "borderRadius": 8,
    "wireframe": false,
    "colorIcon": "#00adb5",
    "colorIconHover": "#00adb5",
    "colorLink": "#00adb5"
}

export const SiteThemeComponentsToken = {
    "Statistic": {
        "fontSizeHeading3": 34,
    }
}

export const HomeToolTags = [
    {
        id: 1,
        name: 'Chatbot',
        color: 'magenta'
    },
    {
        id: 2,
        name: 'Image',
        color: 'orange'
    },
    {
        id: 3,
        name: 'Tool',
        color: 'volcano'
    },
    {
        id: 4,
        name: 'Dev',
        color: 'gold'
    }
]

export interface HomeToolType {
    id: number;
    title: string;
    content: string;
    link: string;
    tags: string[];
}

export const HomeToolData: HomeToolType[] = [
    {
        id: 1,
        title: 'ChatGPT prompts',
        content: 'We customize the prompts for you to generate the most relevant responses.',
        link: '',
        tags: ['Chatbot']
    },
    {
        id: 2,
        title: 'Put customer support',
        content: "Let AI reply to your customers' questions, faster and better than a human would.",
        link: "https://www.autopailot.com",
        tags: ['Tool']
    },
    {
        id: 3,
        title: "Headshots Generator",
        content: "Get High Quality Professional Headshots and Profile Pictures",
        link: "https://avatarize.club/",
        tags: ['Image']
    },
    {
        id: 4,
        title: "AI Recipe Generator",
        content: "Generate recipes based on ingredients you have at home",
        link: "https://ai-recipes.softr.app/",
        tags: ['Tool']
    },
    {
        id: 5,
        title: "AI Text Classifier - OpenAI API",
        content: "An API for accessing new AI models developed by OpenAI",
        link: "https://platform.openai.com/ai-text-classifier",
        tags: ['Tool']
    },
    {
        id: 6,
        title: "Prodia",
        content: "A free stable diffusion API tool with many models to help implement generative AI into your app.",
        link: "https://app.prodia.com/#/art-ai",
        tags: ['Image']
    },
    {
        id: 7,
        title: "Conversational AI Platform for Customer Support | Cohere",
        content: "AI-powered support assistance that finds answers from previous tickets",
        link: "https://cohere.io/",
        tags: ['Chatbot', 'Tool']
    },
    {
        id: 8,
        title: "Mixo | Launch your startup in seconds",
        content: "Mixo is an AI-powered builder to help entrepreneurs quickly launch and validate their business ideas.",
        link: "https://www.mixo.io/",
        tags: ['Tool']
    },
    {
        id: 9,
        title: "The easiest & fastest way to integrate GPT into your apps.",
        content: "Make your SaaS & mobile apps stand out with the power of GPT: Develop, test, manage, and improve all your prompts in one place. Then integrate with one simple API call - no matter which provider.",
        link: "https://promptitude.io/",
        tags: ['Dev']
    },
    {
        id: 10,
        title: "Free Text to Speech",
        content: "TTSMaker is a free text-to-speech tool that provides speech synthesis services and supports multiple languages.",
        link: "https://ttsmaker.com/",
        tags: ['Tool']
    },

]