import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { RendererType, withNotification } from '@gannochenko/ui';
import { Link } from 'react-router-dom';
import {
    useErrorNotification,
    useDispatchUnload,
    withClient,
    useDispatchLoad,
} from '../../lib';

import { Layout } from '../../components';

import { HomePagePropsType, HomePagePropsAlt } from './type';
import { mapDispatchToProps } from './dispatch';
import { ObjectLiteral } from '../../../type';
import { SEO } from '../../components/SEO';

const HomePageComponent: FunctionComponent<HomePagePropsType> = ({
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
            <SEO title="Home" />
            <Link to="/page2">Page 2</Link>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    notify({ text: 'MESSAGE!', lifeTime: 1000 });
                }}
            >
                Test
            </Button>
        </>
    );
};

export const HomePage = withNotification<HomePagePropsAlt>(
    withClient(
        connect(
            (state: ObjectLiteral) => state.home,
            mapDispatchToProps,
        )(HomePageComponent),
    ),
);

export const HomePageRenderer: RendererType = () => (
    <Layout>
        <HomePage />
    </Layout>
);
