import React, { FunctionComponent, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { RendererType, withNotification } from '@gannochenko/ui';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { withClient, usePage } from '../../lib';

import { Container, Copyright, Layout, SEO } from '../../components';
import { BoardPagePropsType, BoardPageOwnPropsType } from './type';
import { mapDispatchToProps } from './dispatch';

import {
    Picture,
    ConsumptionIndicator,
    Buttons,
    IndicatorPanel,
    Indicators,
    Info,
} from './style';
import { ObjectLiteral } from '../../../type';
import { useShutdown, useStatus } from './hooks';

import { ACTION_RESTART } from './constants';
import { getMemoryUsage, round } from './util';

const BoardPageComponent: FunctionComponent<BoardPagePropsType> = (props) => {
    usePage(props);
    const {
        open,
        onAskRestart,
        onAskHalt,
        onCloseAsk,
        onConfirm,
        actionType,
    } = useShutdown(props);
    useStatus(props);

    const { loading, cpuUsage, cpuTemperature, serialNumber, ip } = props;
    const memoryUsage = getMemoryUsage(props.memoryAvailable, props.memoryFree);

    console.log(serialNumber);
    console.log(ip);

    return (
        <>
            <SEO title="Board" />
            <Container>
                <h1>Board</h1>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Buttons>
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={onAskHalt}
                                disabled={loading}
                            >
                                Shutdown
                            </Button>
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={onAskRestart}
                                disabled={loading}
                            >
                                Restart
                            </Button>
                        </Buttons>

                        <Indicators>
                            <IndicatorPanel>
                                <Typography variant="h3" gutterBottom>
                                    Memory: {round(memoryUsage.value / 1024)} mb
                                </Typography>
                                <ConsumptionIndicator
                                    variant="determinate"
                                    value={memoryUsage.percent}
                                />
                            </IndicatorPanel>
                            <IndicatorPanel>
                                <Typography variant="h3" gutterBottom>
                                    CPU: {round(cpuUsage || 0)} %
                                </Typography>
                                <ConsumptionIndicator
                                    variant="determinate"
                                    value={cpuUsage || 0}
                                />
                            </IndicatorPanel>
                            <IndicatorPanel>
                                <Typography variant="h3" gutterBottom>
                                    CPU Temp: {round(cpuTemperature || 0)}{' '}
                                    &#8451;
                                </Typography>
                                <ConsumptionIndicator
                                    variant="determinate"
                                    value={cpuTemperature || 0}
                                />
                            </IndicatorPanel>
                        </Indicators>
                    </Grid>
                    <Grid item xs={6}>
                        <Info>
                            <b>Serial number</b>: {serialNumber}
                            <br />
                            <b>IP</b>: {ip}
                        </Info>
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
                    <DialogContent>
                        This board will be{' '}
                        {actionType === ACTION_RESTART
                            ? 'restarted'
                            : 'shut down'}
                        .
                    </DialogContent>
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
