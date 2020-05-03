import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { RendererType, withNotification } from '@gannochenko/ui';
import { Link } from 'react-router-dom';
import {
    useErrorNotification,
    useDispatchUnload,
    withClient,
    useDispatchLoad,
} from '../../lib';

import { Layout } from '../../components';

import { Page2PropsType, Page2PropsAlt } from './type';
import { mapDispatchToProps } from './dispatch';
import { ObjectLiteral } from '../../../type';

const Page2Component: FunctionComponent<Page2PropsType> = ({
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
            <Link to="/">Root</Link>
        </>
    );
};

export const Page2 = withNotification<Page2PropsAlt>(
    withClient(
        connect(
            (state: ObjectLiteral) => state.page2,
            mapDispatchToProps,
        )(Page2Component),
    ),
);

export const Page2Renderer: RendererType = () => (
    <Layout title="Page 2">
        <Page2 />
    </Layout>
);
