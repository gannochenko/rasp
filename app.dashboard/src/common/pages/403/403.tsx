import React from 'react';
import { RendererType } from '@gannochenko/ui';

import { Container, Layout } from '../../components';
import { SEO } from '../../components/SEO';

export const ForbiddenPage = () => {
    return (
        <>
            <SEO title="403 &mdash; Forbidden" />
            <Container>
                <span>Forbidden</span>
            </Container>
        </>
    );
};

export const ForbiddenPageRenderer: RendererType = () => (
    <Layout>
        <ForbiddenPage />
    </Layout>
);
