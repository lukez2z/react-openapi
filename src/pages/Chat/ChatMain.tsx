import { Row, Col, Divider } from 'antd';
import { ChatBox } from './ChatBox';
import { ChatTypeTab } from './ChatTypeTab';
import { ChatTopicTab } from './ChatTopicTab';
import { ChatHelper } from './ChatHelper';


export const ChatMain = () => {

    return (
        <>
            <Row>
                <Col span={13} offset={4}>
                    <ChatTypeTab />
                </Col>
            </Row>
            <Row justify="center" gutter={[12, 12]}>
                <Col span={4}>
                    <ChatTopicTab />
                </Col>
                <Col span={12}>
                    <ChatBox />
                </Col>
                <Col>
                    <Divider type="vertical" style={{
                        height: '100%',
                    }} />
                </Col>
                <Col span={6}>
                    <ChatHelper />
                </Col>
            </Row>
        </>
    )
}