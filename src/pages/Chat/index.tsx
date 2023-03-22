import React from 'react';
import { Divider, List, Typography, Row, Col, Space } from 'antd';

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

export const Chat: React.FC = () => (
    <Row justify="center">
        <Divider orientation="left">Default Size</Divider>
        <Col span={16}>
            <List
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                bordered
                dataSource={data}
                // split={false}
                renderItem={(item) => {
                    return (
                        <>
                            <List.Item >
                                <Space direction="vertical">
                                    <Typography.Text style={{ textAlign: 'left' }}>[Q] {item.question}</Typography.Text>

                                    <Typography.Text style={{ textAlign: 'right' }}>[A] {item.answer}</Typography.Text>
                                </Space>
                            </List.Item>
                        </>
                    );
                }}
            />

        </Col>
    </Row >
);