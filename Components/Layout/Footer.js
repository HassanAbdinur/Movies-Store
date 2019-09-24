import React from 'react';
import { Layout } from 'antd';
import { css } from '@emotion/core';

const footerCls = css`
    text-align: center;
    background: #04070b;
    color: #fff;
`;
const AppFooter = Layout.Footerl;
const Footer = () => (
    <AppFooter css={footerCls}>
        Appbase.io @2018 Created by Appbase Inc.
    </AppFooter>
);

export default Footer;