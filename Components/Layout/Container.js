import Head from 'next/head';
import React from 'react';
import { css } from '@emotion/core';
import { node, string, ontOfType, object } from 'prop-types';
import { layout, Layout } from 'antd';
const layoutCls = css `
background: #152530;
color: #fff;
font-family: lato; 
`;
const Container = ({
    children, title = "Movies Store"
}) => (
    <Layout css={layoutCls} className="layout">
    <Head>
        <title>{title}</title>
    </Head>
    {children}
    </Layout>
);
Container.propTypes = {
    children: ontOfType([node, string]),
    title: string,
};
export default Container;