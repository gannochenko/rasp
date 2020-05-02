import React from 'react';
import { RendererType } from '@gannochenko/ui';

import { Layout } from '../../components';

export const ForbiddenPage = () => {
    return <span>Access forbidden</span>;
};

export const ForbiddenPageRenderer: RendererType = () => (
    <Layout title="403">
        <ForbiddenPage />
    </Layout>
);
