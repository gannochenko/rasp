import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { RendererType, withNotification } from '@gannochenko/ui';
import {
    useErrorNotification,
    useDispatchUnload,
    withClient,
    useDispatchLoad,
} from '../../lib';

import { Container, Layout } from '../../components';

import { CookiePolicyPagePropsType, CookiePolicyPagePropsAlt } from './type';
import { mapDispatchToProps } from './dispatch';
import { ObjectLiteral } from '../../../type';
import { SEO } from '../../components/SEO';

const CookiePolicyPageComponent: FunctionComponent<CookiePolicyPagePropsType> = ({
    dispatchLoad,
    dispatchUnload,
    serviceManager,
    error,
    notify,
}) => {
    useDispatchLoad(dispatchLoad, serviceManager);
    useDispatchUnload(dispatchUnload);
    useErrorNotification(error, notify);

    return (
        <>
            <SEO title="Cookie policy" />
            <Container></Container>
        </>
    );
};

export const CookiePolicyPage = withNotification<CookiePolicyPagePropsAlt>(
    withClient(
        connect(
            (state: ObjectLiteral) => state.cookiePolicy,
            mapDispatchToProps,
        )(CookiePolicyPageComponent),
    ),
);

export const CookiePolicyRenderer: RendererType = () => (
    <Layout topPadding>
        <CookiePolicyPage />
    </Layout>
);
