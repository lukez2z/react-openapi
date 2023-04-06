import React, { useContext, useState } from 'react';
import { Tabs, Row, Col } from 'antd';
import { ChatBox } from './ChatBox';
import useChat from '@/hooks/useChat';
import { TopicData, ChatData, ChatType } from '@/types/chat';
import { useDispatch } from 'react-redux';
import { deleteChatTopic, newChatTopic } from '@/redux/reducers/chatSlice';
import { v4 as uuid4 } from 'uuid'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { ChatTopicForm } from './ChatTopicForm';
import { ProList } from '@ant-design/pro-components';
import { ChatContext } from './Chat.provider';


const topicDatadata = [
    {
        title: 'Chat Session1',
    },
    {
        title: 'Chat Session2',
    },
    {
        title: 'Chat Session3',
    },
    {
        title: 'Chat Session4',
    },
];

const TabContent = () => {

    const dispatch = useDispatch()

    const { currentChatType, setCurrentTopicId } = useContext(ChatContext)

    const topics = useChat().data.find((chat: ChatData) => chat.type === currentChatType)?.topic || []

    const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
    const rowSelection = {
        selectedRowKeys,
        onChange: (keys: string[]) => setSelectedRowKeys(keys),
    };

    return (
        <Row justify="start" gutter={[12, 12]}>
            {/* <Col span={6}>
                <ProList
                    headerTitle="Topics"
                    dataSource={topics}
                    rowKey="id"
                    // rowSelection={rowSelection}
                    onRow={(record: any) => {
                        return {
                            onClick: () => {
                                setCurrentTopicId(record.id)
                            },
                        };
                    }}
                    rowClassName={(record: any) =>
                        selectedRowKeys.includes(record.id) ? 'selected-row' : ''
                    }
                    showExtra="hover"
                    size="small"
                    style={{
                        height: "75vh",
                        overflow: 'auto'
                    }}
                    footer={<Button onClick={() => {
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

                    }>Add</Button>}
                    metas={{
                        title: {
                            dataIndex: 'topic',
                        },
                        description: {
                            dataIndex: 'description',
                        },
                        actions: {
                            render: (text, item) => [
                                <ChatTopicForm key='form' topicData={item} chatType={currentChatType} />,
                                <Popconfirm
                                    title="Delete the Topic"
                                    description="Are you sure to delete this Topic and Chat history?"
                                    onConfirm={() => {
                                        dispatch(deleteChatTopic({
                                            chatType: currentChatType,
                                            topicId: item.id
                                        }))
                                    }}
                                    okText="Yes"
                                    cancelText="No"
                                    key='delete'
                                    disabled={item.id === '0'}
                                >
                                    <Button
                                        type='link'
                                        size='small'
                                        disabled={item.id === '0'}
                                        icon={<DeleteOutlined />} danger />
                                </Popconfirm>
                            ]
                        }
                    }}
                />
            </Col> */}
            <Col span={14}>
                <ChatBox />
            </Col>
        </Row>
    )
}

export const ChatTab = () => {

    const chatData = useChat()

    const { setCurrentChatType } = useContext(ChatContext)

    return (
        <div>
            <Tabs
                defaultActiveKey="basic"
                // type="card"
                size="large"
                centered
                onChange={(key: ChatType) => setCurrentChatType(key)}
                items={chatData.data.map((chat) => {
                    return {
                        key: chat.type,
                        label: chat.type,
                        children: <TabContent />
                    }
                })
                }
            />
        </div>
    );
};
