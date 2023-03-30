import { SearchOutlined } from '@ant-design/icons';
import { Row, Col, Typography } from 'antd'
import { useEffect, useState } from 'react';
import useStyles from './style';
import { useTheme, useThemeMode } from 'antd-style';
import HomeCard from './HomeCard';
import { HomeToolData } from '@/data/SiteData';


const { Title } = Typography;


export const Home = () => {
    // const { styles, cx, theme } = useStyles();
    // const [hover, setHover] = useState('');

    // const token = useTheme();

    // useEffect(() => {
    //     console.log(token)
    //     console.log(theme)
    // }, [token])



    return (
        <Row justify="center" gutter={[24, 24]}>
            <Col span={24} style={{
                textAlign: "center",
            }}>
                <Title style={{
                    fontSize: 64
                }}>AI Idea & Products</Title>
            </Col>
            <Row justify="space-between" gutter={[24, 24]} style={{
                width: "75vw"
            }}>
                {
                    HomeToolData.map((item, index) => {
                        return (
                            <Col span={8} key={index}>
                                <HomeCard {...item} />
                            </Col>
                        )
                    })

                }
            </Row >
            <div style={{
                zIndex: 10,
                pointerEvents: 'none',
                position: 'absolute',
                top: -250,
                left: "50%",
                transform: "translateX(-50%) scale(1.5)",
                width: 600,
                height: 400,
                opacity: 0.2,
                filter: "blur(69px)",
                willChange: "transform",
                background: "linear-gradient( 135deg, #722ED1 0%, #1677ff 30%, #F5222D 70%, #13C2C2 100% )",
                backgroundSize: "200% 200%",
                animation: "gradient 10s ease infinite",
            }}></div>
        </Row>
    );
};