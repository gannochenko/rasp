import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { RendererType, withNotification } from '@gannochenko/ui';
import { withClient, usePage } from '../../lib';
import { Container, Layout, Link, SEO } from '../../components';

import { BoardPagePropsType, BoardPageOwnPropsType } from './type';
import { mapDispatchToProps } from './dispatch';

import { ObjectLiteral } from '../../../type';

const BoardPageComponent: FunctionComponent<BoardPagePropsType> = (props) => {
    usePage(props);

    return (
        <>
            <SEO title="Board" />
            <Container>
                <Link to="/">Home</Link>
            </Container>
        </>
    );
};

export const BoardPage = withNotification<BoardPageOwnPropsType>(
    withClient(
        connect(
            (state: ObjectLiteral) => state.board,
            mapDispatchToProps,
        )(BoardPageComponent),
    ),
);

export const BoardPageRenderer: RendererType = () => (
    <Layout>
        <BoardPage />
    </Layout>
);
