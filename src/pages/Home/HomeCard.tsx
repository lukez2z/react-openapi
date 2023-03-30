import { SettingsContext } from '@/providers/Settings.provider';
import { createStyles } from 'antd-style';
import { useContext, useState } from 'react';
import { Card, Row, Col, Typography, Tag, Space } from 'antd'
import { ShareAltOutlined } from '@ant-design/icons'
import { HomeToolTags, HomeToolType } from '@/data/SiteData';


const { Title, Text } = Typography;

export default (data: HomeToolType) => {

    const { themeName } = useContext(SettingsContext)

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    return (
        // 使用 cx 可以组织 className
        <Card
            hoverable
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={isHover ? {
                transform: "scale(1.1)",
                transition: "all 0.2s ease-in"
            } : {
            }}
        >
            {/* <div>当前主题模式：{themeName}</div> */}
            <Row>
                <Col>{data.tags.map(tag => <Space>
                    <Tag color={HomeToolTags.find(item => item.name === tag)?.color}>{tag}</Tag>
                </Space>)}</Col>
                <Col span={24}>
                    <Title level={3}>{data.title}</Title>
                </Col>
                <Col span={24}>
                    <Text type="secondary">{data.content}</Text>
                </Col>
                <Col span={24}>
                    {
                        data.link && <a href={data.link} target="_blank" rel="noopener noreferrer">查看 <ShareAltOutlined /></a>
                    }
                </Col>
            </Row>
        </Card>
    );
};