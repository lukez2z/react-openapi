import { useDispatch } from 'react-redux';
import { delApiKey, setConfig } from '@/redux/reducers/configSlice';
import useCurrentConfig from '@/hooks/useCurrentConfig';
import { Layout, Button, App, Card, Form, Input, Row, Col, List, Space, Tag, Select } from "antd";
import { useTranslation } from "react-i18next";
import { namespaces } from '@/i18n/i18n.constants';
import { useGetModelListMutation } from '@/services/openai';
import { useEffect, useState } from 'react';
import { setChatModel } from "@/redux/reducers/openaiSlice";


interface ModelType {
    name: string;
    tag?: string;
    desc: string;
}

const avaiableModels: ModelType[] = [
    {
        name: 'GPT-4',
        tag: 'Limited beta',
        desc: 'A set of models that improve on GPT-3.5 and can understand as well as generate natural language or code'
    },
    {
        name: 'GPT-3.5',
        desc: 'A set of models that improve on GPT-3 and can understand as well as generate natural language or code'
    },
    {
        name: 'DALL·E',
        tag: 'Beta',
        desc: 'A model that can generate and edit images given a natural language prompt'
    },
    {
        name: 'Whisper',
        tag: 'Beta',
        desc: 'A model that can convert audio into text'
    },
    {
        name: 'Embeddings',
        desc: 'A set of models that can convert text into a numerical form'
    },
    {
        name: 'CodexLimited',
        tag: 'Limited beta',
        desc: 'A set of models that can understand and generate code, including translating natural language to code'
    },
    {
        name: 'Moderation',
        desc: 'A fine-tuned model that can detect whether text may be sensitive or unsafe'
    },
    {
        name: 'GPT-3',
        desc: 'A set of models that can understand and generate natural language'
    }

]


export const APIKeySetting = () => {

    const currentConfig = useCurrentConfig()
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const { notification } = App.useApp();
    const { t, i18n } = useTranslation([
        namespaces.common
    ]);



    const handleAPIKeyChange = (values: any) => {
        const apiKey = values.apiKey
        if (apiKey) {
            dispatch(setConfig({
                ...currentConfig,
                apiKey: apiKey
            }))
            notification.success({
                message: 'API Key is updated!',
                placement: 'bottomRight'
            })

        } else {
            notification.error({
                message: 'API Key is empty!',
                placement: 'bottomRight'
            })
        }
    }

    const [getModelList, { data, isLoading, isSuccess, isError, error }] = useGetModelListMutation()


    useEffect(() => {
        if (isError && error) {
            if ('data' in error) {
                const data = error.data
                notification.error({
                    message: data.error.message,
                    placement: 'bottomRight'
                })
            }
        }
    }, [error])

    const [modelSelectData, setModelSelectData] = useState(data ? data.data : [])


    useEffect(() => {
        if (data) {
            setModelSelectData(data.data)
        }
    }, [isSuccess])


    return (
        <Layout
            style={{
                margin: 0,
                padding: 0,
                height: "100vh",
                width: "100vw",
                overflow: "hidden",
                position: "relative"
            }}
        >
            <Row
                gutter={[12, 12]}
            >
                <Col
                    span={6}
                    style={{
                        textAlign: "center"
                    }}>
                    <Card title="API Setting">
                        <Form
                            form={form}
                            autoComplete="off"
                            layout="vertical"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 24 }}
                            initialValues={{
                                apiKey: currentConfig.apiKey
                            }}
                            style={{
                                maxWidth: 400,
                            }}
                            onFinish={handleAPIKeyChange}
                        >
                            <Form.Item
                                label="Input your key"
                                name='apiKey'
                                extra="Key will be only saved on your browser!"
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item wrapperCol={{ span: 24 }}>
                                <Space>
                                    <Button type="primary" htmlType="submit" size="small" >
                                        {t('button.save')}
                                    </Button>
                                    <Button type="default" danger size="small" onClick={() => {
                                        dispatch(delApiKey())
                                        notification.success({
                                            message: 'API Key had been removed!',
                                            placement: 'bottomRight'
                                        })
                                        form.resetFields()
                                    }}>
                                        {t('button.delete')}
                                    </Button>
                                </Space>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Avaiable Models">
                        <List
                            itemLayout="horizontal"
                            dataSource={avaiableModels}
                            style={{
                                maxHeight: 400,
                                overflow: 'auto'
                            }}
                            renderItem={(item, index) => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={<Space>{item.name} {item.tag ? <Tag>{item.tag}</Tag> : null}</Space>}
                                        description={item.desc}
                                    />
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        title="You can use below models"
                        extra={[
                            <Button onClick={() => getModelList()} loading={isLoading}>Refresh</Button>
                        ]}
                    >

                        {
                            isSuccess && (!error) ?
                                <Select
                                    showSearch
                                    placeholder="Select a model"
                                    optionFilterProp="children"
                                    onChange={(value) => {
                                        dispatch(setChatModel(value as string))
                                    }
                                    }
                                    // onSearch={onSearch}
                                    style={{ width: 250 }}
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={modelSelectData?.map((model) => {
                                        return {
                                            label: model.id,
                                            value: model.id
                                        }
                                    })
                                    }
                                />
                                : null
                        }
                    </Card>
                </Col>
            </Row>
        </Layout>
    )
}
