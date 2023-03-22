import React, { FC, createContext, useState, useEffect } from "react";
import type { ThemeConfig } from "antd/es/config-provider/context";
import { useTranslation } from "react-i18next";
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import { Locale } from "antd/lib/locale-provider";
import { SiteThemeComponentsToken, SiteThemeDefaultToken } from "@/data/SiteData";
import { useAppDispatch } from "@/redux/hooks";
import { setConfig } from "@/redux/reducers/configSlice";
import useCurrentConfig from "@/hooks/useCurrentConfig";



export type ThemeName = 'light' | 'dark' | 'compact';


interface ISettingsContext {
    sideMenuCollapsed: boolean;
    toggleSideMenuCollapsed?: (status: boolean) => any
    themeName: ThemeName;
    setTheme: (name: ThemeName) => any;
    token: ThemeConfig['token']
    componentsToken?: ThemeConfig['components']
    currentLocale: Locale

}

type Props = {
    children?: React.ReactNode
};



export const SettingsContext = createContext<ISettingsContext>({
    sideMenuCollapsed: false,
    toggleSideMenuCollapsed: (status: boolean) => { },
    themeName: "dark",
    setTheme: (name: ThemeName) => { },
    token: SiteThemeDefaultToken,
    componentsToken: SiteThemeComponentsToken,
    currentLocale: zhCN,
});

const SettingsProvider: FC<Props> = ({ children }) => {

    const currentConfig = useCurrentConfig()
    const dispatch = useAppDispatch()

    const [sideMenuCollapsed, setSideMenuCollapsed] = useState(false);
    const toggleSideMenuCollapsed = (status: boolean) => {
        setSideMenuCollapsed(status);
    };

    const [themeName, setThemeName] = useState<ThemeName>(currentConfig.theme)
    const setTheme = (name: ThemeName) => {
        setThemeName(name)
        dispatch(
            setConfig({
                ...currentConfig,
                theme: name
            })
        );
    }


    const [token, setToken] = useState(SiteThemeDefaultToken)
    const [componentsToken, setComponentsToken] = useState(SiteThemeComponentsToken)

    const { i18n } = useTranslation()


    const setCurLanguage = () => {
        switch (i18n.language) {
            case 'en':
                return enUS

            default:
                return zhCN
        }
    }

    const [currentLocale, setCurrentLocale] = useState(setCurLanguage)

    useEffect(() => {
        setCurrentLocale(setCurLanguage)
    }, [i18n.language])



    return (
        <SettingsContext.Provider
            value={{
                sideMenuCollapsed,
                toggleSideMenuCollapsed,
                themeName,
                setTheme,
                token,
                componentsToken,
                currentLocale,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};

export default SettingsProvider;
