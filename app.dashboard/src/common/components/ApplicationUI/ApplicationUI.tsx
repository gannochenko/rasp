import React, { useEffect, FunctionComponent } from 'react';
// import { Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
// import {  } from 'react-router-dom';
import {
    withNotification,
    Notifications,
    Route,
    Switch,
} from '@gannochenko/ui';

import { MainProgressBar } from './style';
import { ApplicationProperties, ApplicationPropertiesAlt } from './type';
import mapDispatchToProps from './dispatch';
import {
    useNetworkMonitor,
    useErrorNotification,
    useNetworkNotification,
} from '../../lib';

import { SHOW_OFFLINE, SHOW_ONLINE } from './reducer';
import { GlobalStyle } from '../../style';

import {
    ForbiddenPage,
    NotFoundPage,
    HomePageRenderer,
    NotFoundPageRenderer,
    ForbiddenPageRenderer,
} from '../../pages';
import { ObjectLiteral } from '../../../type';
import { NotificationUI } from '../NotificationUI';

const ApplicationUIComponent: FunctionComponent<ApplicationProperties> = ({
    ready = false,
    client,
    history,
    error = null,
    notify = () => {},
    notificationsEventEmitter,
    offline = false,
    dispatch = () => {},
    dispatchLoad = () => {},
}) => {
    useEffect(() => {
        dispatchLoad(client);
    }, [client, dispatchLoad]);

    useNetworkMonitor(dispatch, SHOW_ONLINE, SHOW_OFFLINE);
    useErrorNotification(error, notify);
    useNetworkNotification(offline, notify);

    return (
        <>
            <GlobalStyle />
            <Notifications emitter={notificationsEventEmitter}>
                {(props) => <NotificationUI {...props} />}
            </Notifications>
            <MainProgressBar observeGlobalLock />
            {ready && (
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path="/" renderer={HomePageRenderer} />
                        <Route path="/403" renderer={ForbiddenPageRenderer} />
                        <Route renderer={NotFoundPageRenderer} />
                    </Switch>
                </ConnectedRouter>
            )}
        </>
    );
};

export const ApplicationUI = withNotification<ApplicationPropertiesAlt>(
    connect(
        (store: ObjectLiteral) => store.application,
        mapDispatchToProps,
    )(ApplicationUIComponent),
);
