import React, { useRef, FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { Notifications, NotificationContext } from './components/Notifications';

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

export const Application: FunctionComponent = () => {
    const notificationRef = useRef<Notifications>();

    return (
        <ThemeContext.Provider value={theme}>
            <ClientContext.Provider value={client}>
                <Provider store={store}>
                    <Notifications
                        ref={notificationRef}
                        theme={theme.notifications}
                    >
                        {() => <div>Message!</div>}
                    </Notifications>
                    <NotificationContext.Provider value={notificationRef}>
                        <ApplicationUI
                            history={history}
                            theme={theme}
                            client={client}
                        />
                    </NotificationContext.Provider>
                </Provider>
            </ClientContext.Provider>
        </ThemeContext.Provider>
    );
};
