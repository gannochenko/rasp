import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { EventEmitter } from 'events';
import { NotificationContext } from '@gannochenko/ui';

import { ApplicationUI } from './components';
import { ThemeContext, theme } from './style';
import {
    ServiceManager,
    ServiceManagerContext,
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
const serviceManager = new ServiceManager();
const emitter = new EventEmitter();

export const Application: FunctionComponent = () => {
    return (
        <ThemeContext.Provider value={theme}>
            <ServiceManagerContext.Provider value={serviceManager}>
                <Provider store={store}>
                    <NotificationContext.Provider value={emitter}>
                        <ApplicationUI
                            history={history}
                            serviceManager={serviceManager}
                        />
                    </NotificationContext.Provider>
                </Provider>
            </ServiceManagerContext.Provider>
        </ThemeContext.Provider>
    );
};
