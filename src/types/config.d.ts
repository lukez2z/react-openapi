import { ThemeName } from "@/providers/Settings.provider";


export interface ConfigState {
    remember?: boolean;
    apiKey: string;
    theme: ThemeName
}
