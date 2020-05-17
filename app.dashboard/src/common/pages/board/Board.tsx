import React, { FunctionComponent, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { RendererType, withNotification } from '@gannochenko/ui';
import Grid from '@material-ui/core/Grid';
import { Button, Box } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { withClient, usePage } from '../../lib';

import { Container, Copyright, Layout, SEO } from '../../components';
import { BoardPagePropsType, BoardPageOwnPropsType } from './type';
import { mapDispatchToProps } from './dispatch';

import { Picture } from './style';
import { ObjectLiteral } from '../../../type';

const ACTION_RESTART = 'R';
const ACTION_HALT = 'H';

const BoardPageComponent: FunctionComponent<BoardPagePropsType> = (props) => {
    usePage(props);

    const { dispatchShutdown, serviceManager, loading } = props;

    const [open, setOpen] = useState(false);
    const [actionType, setActionType] = useState(ACTION_RESTART);

    const onAskRestart = useCallback(() => {
        setActionType(ACTION_RESTART);
        setOpen(true);
    }, []);
    const onAskHalt = useCallback(() => {
        setActionType(ACTION_HALT);
        setOpen(true);
    }, []);
    const onCloseAsk = useCallback(() => setOpen(false), []);
    const onConfirm = useCallback(() => {
        setOpen(false);
        dispatchShutdown(serviceManager, actionType === ACTION_RESTART);
    }, [actionType, setOpen]);

    return (
        <>
            <SEO title="Board" />
            <Container>
                <h1>Board</h1>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Box marginRight={2} display="inline-block">
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={onAskHalt}
                                disabled={loading}
                            >
                                Shutdown
                            </Button>
                        </Box>
                        <Box display="inline-block">
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={onAskRestart}
                                disabled={loading}
                            >
                                Restart
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Picture />
                        <Copyright
                            author="Jstrom99"
                            source="https://commons.wikimedia.org/wiki/File:RaspberryPi_Model_4B.svg"
                            sourceText="Wikipedia"
                        />
                    </Grid>
                </Grid>

                <Dialog open={open} onClose={onCloseAsk}>
                    <DialogTitle>Sure?</DialogTitle>
                    <DialogContent>This board will be restarted.</DialogContent>
                    <DialogActions>
                        <Button onClick={onCloseAsk} color="primary" autoFocus>
                            Cancel
                        </Button>
                        <Button
                            onClick={onConfirm}
                            color="primary"
                            variant="contained"
                        >
                            Proceed
                        </Button>
                    </DialogActions>
                </Dialog>
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
