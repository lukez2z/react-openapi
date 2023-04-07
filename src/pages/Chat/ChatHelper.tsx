
import {
    Button,
    Col,
    Form,
    InputNumber,
    Radio,
    Row,
    Select,
    Slider,
    Switch,
} from 'antd';

import { useContext, useEffect, useRef } from 'react';
import { ChatContext } from './Chat.provider';
import { OpenAiModels } from '@/data/SiteData';
import type { FormInstance } from 'antd/es/form';


const { Option } = Select;

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};


const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
};

export const ChatHelper = () => {

    const { currentTopicName, currentTopicModel } = useContext(ChatContext)

    const formRef = useRef<FormInstance>(null);
    
    useEffect(() => {
      if (formRef.current) {
        formRef.current.setFieldsValue({ model: currentTopicModel?.name })
      }
    }, [currentTopicModel])
    

    return (
        <Form
            name="validate_other"
            {...formItemLayout}
            ref={formRef}
            onFinish={onFinish}
            initialValues={{ model: currentTopicModel?.name, stream: false, temperature: 50, token: 64}}
        >
            <Form.Item
                name="model"
                label="Model"
                hasFeedback
                rules={[{ required: true, message: 'Please select your Model!' }]}
            >
                <Select placeholder="You can change below model for current topic">
                    {
                        OpenAiModels.map((model) => {
                            return <Option key={model.name} value={model.model}>{model.name}</Option>
                        })
                    }
                </Select>
            </Form.Item>


            <Form.Item name="stream" label="Stream" valuePropName="checked">
                <Switch />
            </Form.Item>

            <Form.Item name="temperature" label="Temperature">
                <Slider
                    marks={{
                        0: 'A',
                        30: 'B',
                        50: 'C',
                        70: 'D',
                        100: 'E',
                    }}
                />
            </Form.Item>
            <Form.Item name="token" label="Token Limit">
                <InputNumber min={1} max={4096} />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>
        </Form>
    )
}