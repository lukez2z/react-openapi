
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

const { Option } = Select;

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};

const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
};

export const ChatHelper = () => {

    return (
        <Form
            name="validate_other"
            {...formItemLayout}
            onFinish={onFinish}
            initialValues={{ model: 'gpt-3.5', 'token': 500 }}
        >
            <Form.Item
                name="model"
                label="Model"
                hasFeedback
                rules={[{ required: true, message: 'Please select your Model!' }]}
            >
                <Select placeholder="Please select a country">
                    <Option value="gpt-3.5">GPT3.5</Option>
                    <Option value="gpt-4">GPT4</Option>
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