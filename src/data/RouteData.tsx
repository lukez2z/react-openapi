import {
    MessageOutlined,
    HomeOutlined,
    FilePdfFilled
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
            name: "Home",
            icon: <HomeOutlined />,
            locale: "menu.Home",
            path: "/home",
            hideInMenu: false,
        },
        {
            name: "Chat",
            icon: <FilePdfFilled />,
            locale: "menu.Chat",
            path: "/gpt/chat",
            hideInMenu: false,
        },
        {
            name: "Q&A",
            icon: <MessageOutlined />,
            locale: "menu.q&a",
            path: "/gpt/q&a",
            hideInMenu: false,
        },
        {
            name: "Code",
            icon: <FilePdfFilled />,
            locale: "menu.Code",
            path: "/gpt/code",
            hideInMenu: false,
        },
        {
            name: "Translation",
            icon: <FilePdfFilled />,
            locale: "menu.Translation",
            path: "/gpt/translation",
            hideInMenu: false,
        },
    ],
};

export default siteRoutes;
