import React, { useContext, useState } from 'react';
import { FloatButton } from 'antd';
import { KeyOutlined, SettingOutlined } from '@ant-design/icons';
import { useTranslation } from "react-i18next";
import { SettingsContext } from '@/providers/Settings.provider';
import { namespaces } from '@/i18n/i18n.constants';



export const FloatMenuButton = () => {

    const { t, i18n } = useTranslation([
        namespaces.common
    ]);

    const { themeName, setTheme, currentLocale } = useContext(SettingsContext)

    const onLangChange = () => {
        console.log(currentLocale.locale)
        i18n.changeLanguage(currentLocale.locale === "en" ? "zh" : "en");
    }

    const onThemeChange = () => {
        setTheme(themeName === "dark" ? "light" : "dark")
    }

    const [isModalOpened, setIsModalOpened] = useState(false);
    const handleModalOk = () => {
        setIsModalOpened(false);
    }

    const handleModalCancel = () => {
        setIsModalOpened(false);
    };


    return (
        <>
            <FloatButton.Group
                trigger="click"
                type="primary"
                style={{ right: 24 }}
                icon={<SettingOutlined />}
            >
                <FloatButton icon={<KeyOutlined />} tooltip="API Key Setting" href='/setting' />
                <FloatButton description={
                    i18n.language === "zh" ? "ZH" : "EN"
                }
                    onClick={onLangChange}
                />

                <FloatButton
                    description={
                        themeName === "dark" ? "🌜" : "🌞"
                    }
                    onClick={onThemeChange}
                />
            </FloatButton.Group>
        </>
    )

}
