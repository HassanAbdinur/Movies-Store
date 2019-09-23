import React from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import { css } from '@emotion/core';
import { Content, Footer, Header, Container } from '../Components/Layout';

const mainCls = css`
    max-width: 1000px;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    margin-top: 50px;
    color: #fff;
    .title {
        color: #ffffff;
        font-size: 85px;
        font-weight: bold;
        max-width: 480px;
        line-height: 1;
    }
    .subtitle {
        
    }
`