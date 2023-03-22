import { FC, useContext } from 'react';
// import PageLoading from "./components/PageLoading";
import { ConfigProvider, FloatButton, theme as antdTheme } from 'antd';
import { SettingsContext } from '@/providers/Settings.provider'
import ErrorBoundary from "./components/Error";
import { MainLayout } from "./layouts/MainLayout"
import { APIKeySetting, Chat } from './pages';
import { FloatMenuButton } from './layouts/components/FloatMenu';
import { Route, Routes, Navigate } from 'react-router-dom';
import { App as AntdApp } from "antd";


const App: FC = () => {

  const { token, componentsToken, currentLocale, themeName } = useContext(SettingsContext)

  return (
    <ConfigProvider
      locale={currentLocale}
      theme={{
        algorithm: themeName === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        token: token,
        components: componentsToken
      }}
    >
      <ErrorBoundary>
        <AntdApp>
          <MainLayout>
            <Routes>
              <Route path="chat" element={<Chat />} />
              <Route path="setting" element={<APIKeySetting />} />
              <Route path="*" element={<Navigate to="/chat" />} />
            </Routes>
            <FloatMenuButton />
          </MainLayout>
        </AntdApp>
      </ErrorBoundary>
    </ConfigProvider>
  )
}

export default App;