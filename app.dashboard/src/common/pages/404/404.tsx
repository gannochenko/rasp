import React from 'react';
import { RendererType } from '@gannochenko/ui';

import { Container, Layout } from '../../components';
import { SEO } from '../../components/SEO';

export const NotFoundPage = () => {
    return (
        <>
            <SEO title="404 &mdash; Not found" />
            <Container>
                <span>Not found</span>
            </Container>
        </>
    );
};

export const NotFoundPageRenderer: RendererType = () => (
    <Layout>
        <NotFoundPage />
    </Layout>
);
