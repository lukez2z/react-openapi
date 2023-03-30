import React from 'react';
import { Divider, List, Typography, Row, Col, Space, Card, Avatar } from 'antd';
import { Flow } from './Flow';
import { UserOutlined } from '@ant-design/icons';
import { ChatTab } from './ChatTab';
import ChatProvider from './Chat.provider';

const data = [
    {
        question: 'What is the purpose of this website?',
        answer: 'This website is a demo of the React framework.'
    },
    {
        question: 'What is the purpose of this website?',
        // make a long anwser sample
        answer: 'In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.        '
    }
];

const answerData = [
    {
        id: 1,
        answer: 'This website is a demo of the React framework.'
    },
    {
        id: 2,
        answer: 'In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.        '
    }

]

const questionData = [
    {
        id: 1,
        question: 'What is the purpose of this website?'
    },
    {
        id: 2,
        question: 'What is the purpose of this website?'
    }
]


const ChatBoxQuest = ({ question }: { question: string }) => {
    return (
        <Row justify="end" align="bottom" gutter={[2, 2]}>
            <Col flex="auto">
                <Card size='small'>{question}</Card>
            </Col>
            <Col flex="64px">
                <Avatar icon={<UserOutlined />} >Q</Avatar>
            </Col>
        </Row >
    )
}

const ChatBoxAnswer = ({ answer }: { answer: string }) => {
    return (
        <Row justify="start" align="bottom">
            <Col span={1}>
                <Avatar icon={<UserOutlined />} >A</Avatar>
            </Col>
            <Col span={20} style={{
                textAlign: 'left'
            }}>
                <Card size='small'>{answer}</Card>
            </Col>
        </Row>
    )
}
export const Chat: React.FC = () => (
    <ChatProvider>
        <ChatTab />
    </ChatProvider>
);