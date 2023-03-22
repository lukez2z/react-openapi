import { Switch, theme } from 'antd';
import { SettingsContext } from '@/providers/Settings.provider'
import { useContext } from 'react';

const ThemeSwitcher = () => {

    const { themeName, setTheme } = useContext(SettingsContext)

    console.log(themeName)

    const onChange = (checked: boolean) => {
        if (!checked) {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    }

    return (
        <div
            key="themeSwitch"
            aria-hidden
            style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: 24,
            }}
        >
            <Switch
                // style={themeMode === 'dark' ? { backgroundColor: "#43485C" } : undefined}
                onChange={onChange}
                checked={themeName === "dark"}
                checkedChildren="🌜"
                unCheckedChildren="🌞"
            />
        </div>
    )
}

export default ThemeSwitcher