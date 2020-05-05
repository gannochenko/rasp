import React from 'react';
import { RendererType } from '@gannochenko/ui';

import { Layout } from '../../components';
import { SEO } from '../../components/SEO';

export const ForbiddenPage = () => {
    return (
        <>
            <SEO title="403 &mdash; Forbidden" />
            <span>Forbidden</span>
        </>
    );
};

export const ForbiddenPageRenderer: RendererType = () => (
    <Layout>
        <ForbiddenPage />
    </Layout>
);
