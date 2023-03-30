import { ChatType, TopicData } from '@/types/chat';
import {
    ModalForm,
    ProForm,
    ProFormText,
} from '@ant-design/pro-components';
import { Button, Form, message } from 'antd';
import { EditOutlined } from '@ant-design/icons'
import { editChatTopic } from '@/redux/reducers/chatSlice';
import { useDispatch } from 'react-redux';


export const ChatTopicForm = ({ topicData, chatType }: { topicData: TopicData, chatType: ChatType }) => {
    const dispatch = useDispatch()
    const [form] = Form.useForm<{ topic: string; description?: string }>();
    return (
        <ModalForm<{
            topic: string;
            description?: string;
        }>
            title="Edit Topic"
            trigger={
                <Button key='edit' type="link" size='small' icon={<EditOutlined />} />
            }
            form={form}
            autoFocusFirstInput
            modalProps={{
                destroyOnClose: true,
                onCancel: () => console.log('run'),
            }}
            initialValues={{
                topic: topicData.topic,
                description: topicData.description
            }}
            onFinish={async (values) => {
                dispatch(editChatTopic({
                    chatType: chatType,
                    topicId: topicData.id,
                    update: {
                        topic: values.topic,
                        description: values.description
                    }
                }))
                return true;
            }}
            width={300}
        >
            <ProForm.Group>
                <ProFormText
                    width="md"
                    name="topic"
                    label="Topic Name"
                />

                <ProFormText width="lg" name="description" label="Description" />
            </ProForm.Group>
        </ModalForm>
    );
};