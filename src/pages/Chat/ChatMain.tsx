import { Row, Col, Divider, Layout } from 'antd';
import { ChatBox } from './ChatBox';
import { ChatTopicTab } from './ChatTopicTab';
import { ChatHelper } from './ChatHelper';


export const ChatMain = () => {

    // get current location path

    return (
        <Layout style={{
            padding: 12,
        }}>
            <Row justify="space-between">
                <Col span={4}>
                    <ChatTopicTab />
                </Col>
                <Col span={14}>
                    <ChatBox />
                </Col>
                <Col>
                    <Divider type="vertical" style={{
                        height: '100%',
                    }} />
                </Col>
                <Col span={5}>
                    <ChatHelper />
                </Col>
            </Row>
        </Layout>
    )
}