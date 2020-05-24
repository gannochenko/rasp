import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { RendererType, withNotification } from '@gannochenko/ui';
import { withClient, usePage } from '../../lib';
import { Container, Layout, Link, SEO } from '../../components';

import { LedsPagePropsType, LedsPageOwnPropsType } from './type';
import { mapDispatchToProps } from './dispatch';

import { ObjectLiteral } from '../../../type';

const LedsPageComponent: FunctionComponent<LedsPagePropsType> = (props) => {
    usePage(props);

    return (
        <>
            <SEO title="Leds" />
            <Container>
                <Link to="/">Home</Link>
            </Container>
        </>
    );
};

export const LedsPage = withNotification<LedsPageOwnPropsType>(
    withClient(
        connect(
            (state: ObjectLiteral) => state.leds,
            mapDispatchToProps,
        )(LedsPageComponent),
    ),
);

export const LedsPageRenderer: RendererType = () => (
    <Layout>
        <LedsPage />
    </Layout>
);
