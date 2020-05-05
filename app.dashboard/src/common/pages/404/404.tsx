import React from 'react';
import { RendererType } from '@gannochenko/ui';

import { Layout } from '../../components';
import { SEO } from '../../components/SEO';

export const NotFoundPage = () => {
    return (
        <>
            <SEO title="404 &mdash; Not found" />
            <span>Not found</span>
        </>
    );
};

export const NotFoundPageRenderer: RendererType = () => (
    <Layout>
        <NotFoundPage />
    </Layout>
);
