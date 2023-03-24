import { SearchOutlined } from '@ant-design/icons';

import { useEffect, useState } from 'react';
import useStyles from './style';
import { useTheme, useThemeMode } from 'antd-style';


const items = [
    { label: 'New Figma Project', shortcut: 'fn' },
    { label: 'Color Picker', shortcut: '⌘ X', hover: true },
    { label: 'Pick Brand Asset', shortcut: '⌘ B' },
    { label: 'Pick Brand Color', shortcut: '⌘ A' },
    { label: 'Optimize Selected Images', shortcut: '⌘ O' },
    { label: 'Remove background from image', shortcut: '⌘ D' },
    { label: 'Translate with Deepl', shortcut: '⌘ T' },
    { label: 'Quick Notion note', shortcut: '⌘ N' },
    { label: 'Search in Google', shortcut: '⌘ G' },
];

export const Home = () => {
    const { styles, cx, theme } = useStyles();
    const [hover, setHover] = useState('');

    const token = useTheme();

    useEffect(() => {
        console.log(token)
        console.log(theme)
    }, [token])



    return (
        <div className={styles.layout}>
            <div className={styles.container}>
                <div className={styles.searchBox}>
                    <div className={styles.placeholder}>Trigger Macro by Name</div>

                    <SearchOutlined />
                </div>
                <div className={styles.menuContainer}>
                    {items.map(({ label, shortcut }) => {
                        return (
                            <div
                                className={cx(styles.menuItem, hover === label ? styles.menuItemHover : '')}
                                key={label}
                                onMouseEnter={() => {
                                    setHover(label);
                                }}
                            >
                                <div>{label}</div>
                                <div>{shortcut}</div>
                            </div>
                        );
                    })}
                </div>

                <div className="gradient-bg"></div>
                <div className={styles.mask} />
            </div>
        </div>
    );
};