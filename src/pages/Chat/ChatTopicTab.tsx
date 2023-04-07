import useChat from '@/hooks/useChat';
import { Tabs, Row, Col, Popover, Button, Space, Popconfirm, Form, Typography } from 'antd';
import { useContext, useState } from 'react';
import { ChatContext } from './Chat.provider';
import { useDispatch } from 'react-redux';
import {
    ModalForm,
    ProForm,
    ProFormText,
    ProFormTextArea
} from '@ant-design/pro-components';
import type { ChatData } from '@/types/chat';
import { v4 as uuid4 } from 'uuid'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { deleteChatTopic, editChatTopic, newChatTopic } from '@/redux/reducers/chatSlice';


const { Text, Paragraph } = Typography

const ChatTopicTitle = ({ topicId, topic, desc, setOpen }: { topicId: string, topic: string, desc?: string, setOpen: any }) => {

    const { currentChatType } = useContext(ChatContext)

    const dispatch = useDispatch()
    const [form] = Form.useForm<{ topic: string; description?: string }>();

    return (
        <Space>
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
                    onCancel: () => setOpen(false),
                }}
                initialValues={{
                    topic: topic,
                    description: desc
                }}
                onFinish={async (values) => {
                    dispatch(editChatTopic({
                        chatType: currentChatType,
                        topicId: topicId,
                        update: {
                            topic: values.topic,
                            description: values.description
                        }
                    }))
                    setOpen(false)
                    return true;
                }}
                width={400}
                onValuesChange={(changeValues) => console.log(changeValues)}
            >
                <ProForm.Group>
                    <ProFormText
                        width="md"
                        name="topic"
                        label="Topic Name"
                    />

                    <ProFormTextArea width="lg" name="description" label="Description" />
                </ProForm.Group>
            </ModalForm>
            <Popconfirm
                title="Delete the Topic"
                description="Are you sure to delete this Topic and Chat history?"
                onConfirm={() => {
                    dispatch(deleteChatTopic({
                        chatType: currentChatType,
                        topicId: topicId
                    }))
                }}
                okText="Yes"
                cancelText="No"
                key='delete'
                disabled={topicId === '0'}
                placement="bottom"
                destroyTooltipOnHide
            >
                <Button
                    type='link'
                    size='small'
                    disabled={topicId === '0'}
                    icon={<DeleteOutlined />} danger />
            </Popconfirm>
        </Space>
    )
}

const ChatTopicTabLabel = ({ topic, desc, topicId }: { topic: string, desc?: string, topicId: string }) => {

    const [open, setOpen] = useState(false)


    return (
        <Popover
            title={<ChatTopicTitle topicId={topicId} topic={topic} desc={desc} setOpen={setOpen} />}
            content={<Paragraph style={{ maxWidth: 300}}>{desc}</Paragraph>}
            trigger="hover"
            placement="right"
            destroyTooltipOnHide
            mouseLeaveDelay={0.3}
            open={open}
            onOpenChange={(open) => setOpen(open)}
        >
            <Row justify={"start"} style={{
                textAlign: 'left'
            }}
            >
                <Col span={24}>
                    {topic}
                </Col>
                {
                    desc && <Col span={24}>
                        <Text type="secondary" ellipsis style={{ width: 200}}>{desc}</Text>
                    </Col>
                }
            </Row>
        </Popover>

    )
}

export const ChatTopicTab = () => {
    const { currentChatType, setCurrentTopicId, currentTopicId } = useContext(ChatContext)
    const topics = useChat().data.find((chat: ChatData) => chat.type === currentChatType)?.topic || []

    const dispatch = useDispatch()

    return (
        <Row
            justify={"center"}
            style={{
                maxHeight: '90%',
                overflowY: 'auto'
            }}
        >
            <Col
                span={24}
            >
                <Tabs

                    tabPosition="left"
                    tabBarStyle={{ width: '100%' }}
                    items={topics.map((topic) => {
                        return {
                            key: topic.id,
                            label: <ChatTopicTabLabel topic={topic.topic} desc={topic.description} topicId={topic.id} />,
                            children: null
                        }
                    })
                    }
                    onChange={(key) => setCurrentTopicId(key)}
                />
            </Col>
            <Col span={8}>
                <Button onClick={() => {
                    const newId = uuid4()
                    dispatch(newChatTopic({
                        chatType: currentChatType,
                        topic: {
                            id: newId,
                            topic: 'New Topic',
                            chats: []
                        }
                    }))
                    setCurrentTopicId(newId)
                }

                }>Add</Button>

            </Col>
        </Row>
    )
}