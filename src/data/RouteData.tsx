import {
    MessageOutlined,
} from "@ant-design/icons";

export interface ISiteItem {
    exact?: boolean;
    icon: JSX.Element | string;
    locale: string;
    name: string;
    path: string;
    hideInMenu?: boolean;
    hideChildrenInMenu?: boolean;
    breadcrumbName?: string
    // sub menu
    routes?: ISiteRoute["routes"];
}

export interface ISiteRoute {
    path: string;
    routes: Array<ISiteItem>;
}


const siteRoutes: ISiteRoute = {
    path: "/",
    routes: [
        {
            name: "Chat",
            icon: <MessageOutlined />,
            locale: "menu.Chat",
            path: "/chat",
            hideInMenu: false,
        }
    ],
};

export default siteRoutes;
