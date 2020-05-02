import React from 'react';
import { RendererType } from '@gannochenko/ui';

import { Layout } from '../../components';

export const NotFoundPage = () => {
    return <span>Not found</span>;
};

export const NotFoundPageRenderer: RendererType = () => (
    <Layout title="404">
        <NotFoundPage />
    </Layout>
);
