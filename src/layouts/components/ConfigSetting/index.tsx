import React, { useContext, useRef, useState } from 'react';
import { SettingOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Space, Avatar, Modal, Form, Segmented, Select, MenuProps, Input, Button, App } from 'antd';
import { useTranslation } from "react-i18next";
import { namespaces } from '@/i18n/i18n.constants';
import { SettingsContext, ThemeName } from '@/providers/Settings.provider';
import useCurrentConfig from '@/hooks/useCurrentConfig';
import { useDispatch } from 'react-redux';
import { setConfig } from '@/redux/reducers/configSlice';

const ConfigMenu: React.FC = () => {

    const currentConfig = useCurrentConfig()

    const dispatch = useDispatch()

    const { message } = App.useApp();

    const { t, i18n } = useTranslation([
        namespaces.common
    ]);

    const items: MenuProps['items'] = [
        {
            key: 'Setting',
            label: t('user.setting'),
            icon: <SettingOutlined />,
        },
        {
            key: 'ClearAll',
            label: t('user.clearAll'),
            danger: true,
            icon: <LogoutOutlined />,
        },
    ];

    const [form] = Form.useForm();

    // open user setting modal
    const [isModalOpened, setIsModalOpened] = useState(false);


    const handleClickMenu = (e: any) => {
        switch (e.key) {
            case 'ClearAll':
                break;
            case 'Setting':
                setIsModalOpened(true)
                break;

            default:
                break;
        }
    }

    const handleModalOk = () => {
        setIsModalOpened(false);


    }

    const handleModalCancel = () => {
        setIsModalOpened(false);

    };

    // theme config
    const { themeName, setTheme } = useContext(SettingsContext)

    const onThemeChange = (value: ThemeName) => {
        setTheme(value)
    }

    // language config
    const onLangChange = (value: string) => {
        console.log(value)
        i18n.changeLanguage(value);
    }

    const handleAPIKeyChange = () => {

        const apiKey = form.getFieldValue('apiKey')
        if (apiKey) {
            dispatch(setConfig({
                ...currentConfig,
                apiKey: apiKey
            }))
            message.success('API Key Setted!')
        } else {
            message.error('API Key is required!')
        }
    }


    return (
        <div
            key="Config"
            aria-hidden
            style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: 12,
            }}
            onMouseDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
            }}
        >
            <Dropdown
                menu={{
                    items: items,
                    onClick: handleClickMenu
                }}
            >
                <Space size="small">
                    <Avatar size="small" icon={<UserOutlined />} />
                </Space>
            </Dropdown>
            <Modal
                title={t('user.setting')}
                open={isModalOpened}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
                destroyOnClose
                footer={null}
                width="450px"

            >
                <Form
                    form={form}
                    autoComplete="off"
                    layout='vertical'
                    style={{
                        marginTop: 24
                    }}
                    initialValues={{
                        apiKey: currentConfig.apiKey
                    }}
                >
                    <Form.Item
                        label="API Key"
                        name='apiKey'
                    >
                        <Space>
                            <Input.Password style={{ width: 200 }} />
                            <Button onClick={handleAPIKeyChange}>
                                {t('button.save')}
                            </Button>
                        </Space>
                    </Form.Item>
                    <Form.Item
                        label={t('user.themeSetting')}
                    >
                        <Segmented
                            options={[
                                {
                                    label: t('user.theme.dark'),
                                    value: 'dark',
                                    icon: "🌜",
                                },
                                {
                                    label: t('user.theme.light'),
                                    value: 'light',
                                    icon: "🌞",
                                },
                            ]}
                            value={themeName}
                            onChange={onThemeChange}
                        />
                    </Form.Item>
                    <Form.Item
                        label={t('user.languageSetting')}
                    >
                        <Select
                            defaultValue={i18n.language === "zh" ? "zh" : "en"}
                            style={{ width: 100 }}
                            onChange={onLangChange}
                            options={[
                                {
                                    value: 'zh',
                                    label: '中文',
                                },
                                {
                                    value: 'en',
                                    label: 'English',
                                },
                            ]}
                        />

                    </Form.Item>

                </Form>
            </Modal>
        </div>
    )
}


export default ConfigMenu;