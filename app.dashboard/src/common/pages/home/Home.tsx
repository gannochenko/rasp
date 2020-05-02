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

import Mushroom from '../../../../public/mushroom.png';
import { CoinRow, Coin } from './style';
import { HomePagePropsType, HomePagePropsAlt } from './type';
import { mapDispatchToProps } from './dispatch';
import { ObjectLiteral } from '../../../type';

const HomePageComponent: FunctionComponent<HomePagePropsType> = ({
    dispatchLoad,
    dispatchUnload,
    client,
    error,
    notify,
}) => {
    useDispatchLoad(dispatchLoad, client);
    useDispatchUnload(dispatchUnload);
    useErrorNotification(error, notify);

    return (
        <>
            <Link to="/403">403</Link>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    notify({ text: 'MESSAGE!', lifeTime: 1000 });
                }}
            >
                Test
            </Button>
            <p>
                This is a demo page. If you see this page, it means that at
                least <code>react</code>, <code>react-router</code>,{' '}
                <code>redux</code> and <code>redux-saga</code> work properly.
            </p>
            <p>
                If you see this big mushroom, it means that static assets are
                being served normally:
                <br />
                <img src="/mushroom.png" width="50" height="50" />
            </p>
            <p>
                And if you see a second big mushroom, that indicates that{' '}
                <code>url-loader</code> plugin works as expected:
                <br />
                <img src={Mushroom} width="50" height="50" />
            </p>
            <p>
                If you see three coins in a row below, then{' '}
                <code>styled-components</code> module is allright:
                <br />
                <CoinRow>
                    <Coin />
                    <Coin />
                    <Coin />
                </CoinRow>
            </p>
            <p>Enjoy!</p>
            <br />
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
    <Layout title="Hello from Dashboard">
        <HomePage />
    </Layout>
);
