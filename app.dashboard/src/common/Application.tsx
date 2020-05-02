import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { EventEmitter } from 'events';
// import { NotificationContext } from '@gannochenko/ui';
import { NotificationContext } from './components/Notifications';

import { ApplicationUI } from './components';
import { ThemeContext, theme } from './style';
import {
    Settings,
    Client,
    ClientContext,
    createHistory,
    dismissOnReady,
} from './lib';
import { createStore } from './store';

const history = createHistory();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { store, saga, unsubscribe } = createStore({
    history,
    onChange: dismissOnReady,
});
const settings = new Settings();
const client = new Client(settings);
const emitter = new EventEmitter();

export const Application: FunctionComponent = () => {
    return (
        <ThemeContext.Provider value={theme}>
            <ClientContext.Provider value={client}>
                <Provider store={store}>
                    <NotificationContext.Provider value={emitter}>
                        <ApplicationUI history={history} client={client} />
                    </NotificationContext.Provider>
                </Provider>
            </ClientContext.Provider>
        </ThemeContext.Provider>
    );
};
