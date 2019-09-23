import { css } from `@emotion/core`;

export const headerCls = css`
    background-color: #04070b;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
    ul {
        background: #04070b;
        li {
            cursor: pointer;
            color: #fff;
        }
    }
    .menuBar {
        padding: 0 20px;
        overflow: auto;
    }
    .logo {
        width: 220px;
        float: left;
        img {
            display: inline-block;
            font-size: 20px;
            padding: 19px 20px;
            cursor: pointer;
            text-transform: capitalize;
        }
    }
    .menuCon {
        width: calc(100% - 220px);
        float: left;
    }
    .menCon .ant-menu-item {
        padding: 0px 5px;
        a {
            color: #fff;
        }
        &:hover {
            border-bottom: 2px solid transparent;
            color: #fff;
        }
    }
    .menuCon .ant-menu-item-selected {
        border-bottom: 2px solid transparent;
        color: #ff3597;
    }
    .menuCon .ant-menu-submenu-title {
        padding: 10px 20px;
    }
    .menuCon .ant-menu-item,
    .menuCon .ant-menu-submenu-title {
        padding: 10px 15px;
    }
    .menuCon .ant-menu-horizontal {
        border-bottom: none;
    }
    .menu .leftMenu {
        float: left;
    }
`;