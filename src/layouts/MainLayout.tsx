import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ProLayout } from "@ant-design/pro-layout";
import siteRoutes from "@/data/RouteData";
// import { ThemeContext } from "../providers/theme/Theme.provider";
import type { ProSettings } from '@ant-design/pro-layout';
import { Route } from 'antd/lib/breadcrumb/Breadcrumb'
import { useTranslation } from "react-i18next";
import { namespaces } from "@/i18n/i18n.constants";
import { LogoSvg } from "@/components/Icon";
import { Input, theme, Badge } from 'antd';
import {
    GithubFilled,
    InfoCircleFilled,
    PlusCircleFilled,
    QuestionCircleFilled,
    SearchOutlined,
    NotificationOutlined
} from '@ant-design/icons';
import ConfigMenu from "./components/ConfigSetting";
import { SiteDefaultData } from "@/data/SiteData";


interface IProps {
    children?: React.ReactNode;
}




const SearchInput = () => {
    const { token } = theme.useToken();
    return (
        <div
            key="SearchOutlined"
            aria-hidden
            style={{
                display: 'flex',
                alignItems: 'center',
                marginInlineEnd: 24,
            }}
            onMouseDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
            }}
        >
            <Input
                style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                    backgroundColor: token.colorBgTextHover,
                }}
                prefix={
                    <SearchOutlined
                        style={{
                            color: token.colorTextLightSolid,
                        }}
                    />
                }
                placeholder="Search"
                bordered={false}
            />
            <PlusCircleFilled
                style={{
                    color: token.colorPrimary,
                    fontSize: 24,
                }}
            />
        </div>
    );
};


export const MainLayout: React.FC<IProps> = (props) => {
    const { children } = props;
    const navigate = useNavigate();
    const location = useLocation();
    const { t, i18n } = useTranslation([
        namespaces.common
    ])

    const [route, setRoute] = useState(siteRoutes)

    useEffect(() => {
        let d = siteRoutes
        d.routes[0].name = t(`${d.routes[0].name}`)
        setRoute(d)
    }, [i18n.language])



    const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
        fixSiderbar: true,
        layout: 'mix',
        splitMenus: true,
        contentWidth: "Fluid",
        fixedHeader: true,
        navTheme: "realDark"
    });

    const [pathname, setPathname] = useState(location.pathname);


    useEffect(() => {
        setPathname(location.pathname);
    }, [location]);




    return (
        <div
            id="main-layout"
            style={{
                height: "100vh",
            }}
        >
            <ProLayout
                title={SiteDefaultData.siteName.toUpperCase()}
                // logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                logo={<LogoSvg width={36} height={36} />}
                location={{
                    pathname,
                }}
                // iconfontUrl="/icons/iconfont.js"
                route={route}
                headerTitleRender={(logo, title, _) => {
                    const defaultDom = (
                        <a>
                            {logo}
                            {title}
                        </a>
                    );
                    if (document.body.clientWidth < 800) {
                        return defaultDom;
                    }
                    if (_.isMobile) return defaultDom;
                    return (
                        <>
                            {defaultDom}
                        </>
                    );
                }}
                defaultCollapsed={true}
                collapsed={true}
                menu={{
                    locale: true,
                    type: 'group',
                    collapsedShowTitle: false,
                }}
                menuItemRender={(item, dom) => (
                    <a
                        onClick={() => {
                            setPathname(item.path || "/");
                            navigate(item.path as string, {
                                state: { from: pathname },
                            });
                        }}
                    >
                        {dom}
                    </a>
                )}
                // menuDataRender={(menuData) => {
                //     menuData.map(item => {
                //         if (item.children && item.children?.length > 0) {
                //             item.children.map(subItem => subItem.name = t(`${subItem.locale}`))
                //         }
                //         item.name = t(`${item.locale}`)
                //         return item
                //     })
                //     return menuData
                // }}
                {...settings}
                // headerHeight={64}
                splitMenus={true}
                siderWidth={160}
                // breadcrumbProps={{
                //     itemRender: breadcrumbItemRender
                // }}
                actionsRender={(props) => {
                    if (props.isMobile) return [];
                    return [
                        props.layout !== 'side' && document.body.clientWidth > 1400 ? (
                            <SearchInput />
                        ) : undefined,
                        // <InfoCircleFilled key="InfoCircleFilled" />,
                        // <QuestionCircleFilled key="QuestionCircleFilled" />,
                        // <GithubFilled key="GithubFilled" />,
                        <NotificationOutlined />,
                        // <ConfigMenu />,
                        // <ThemeSwitcher />
                    ];
                }}
            >
                {/* <PageContainerWithHeader children={children} /> */}
                {children}
            </ProLayout>
            {/* <MainFooter /> */}
        </div >

    );
};
