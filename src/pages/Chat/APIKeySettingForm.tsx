import {
    ModalForm,
    ProForm,
    ProFormText,
} from '@ant-design/pro-components';
import { Button, Form, Alert } from 'antd';
import { LockOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux';
import { setApiKey } from '@/redux/reducers/configSlice';


export const APIKeySettingForm = () => {
    const dispatch = useDispatch()
    const [form] = Form.useForm<{ apiKey: string }>();
    return (
        <ModalForm<{
            apiKey: string;
        }>
            title="Set ChatGPT API Key"
            layout='horizontal'
            trigger={
                <Button type='primary' icon={<LockOutlined />}>Set API Key</Button>
            }
            form={form}
            autoFocusFirstInput
            modalProps={{
                destroyOnClose: true,
                onCancel: () => console.log('run'),
            }}
            onFinish={async (values) => {
                dispatch(setApiKey(values.apiKey))
                return true;
            }}
            width={450}
        >
            <Alert
                description={
                    <ul>
                        <li>Sign up for the  OpenAI Platform.</li>
                        <li>Create a new secret key in  Settings → API keys.</li>
                    </ul>
                }
                type="info"
                style={{
                    marginBottom: 20
                }}
            />
            <ProForm.Group>
                <ProFormText.Password
                    width="lg"
                    name="apiKey"
                    label="Your API Key"
                />
            </ProForm.Group>
        </ModalForm>
    );
};