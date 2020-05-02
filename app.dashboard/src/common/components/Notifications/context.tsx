import React, { ComponentType } from 'react';
import { EventEmitter } from 'events';
import { MessageInputType } from './type';
import { Nullable } from '../../../type';

export const NotificationContext = React.createContext<Nullable<EventEmitter>>(
    null,
);
export const withNotification = <P extends {} = any>(
    Component: ComponentType<any>,
) => {
    const WithNotification = (props: any) => (
        <NotificationContext.Consumer>
            {(emitter: Nullable<EventEmitter>) => (
                <Component
                    {...props}
                    notify={(messageInput: MessageInputType) =>
                        emitter && emitter.emit('notification', messageInput)
                    }
                    notificationsEventEmitter={emitter}
                />
            )}
        </NotificationContext.Consumer>
    );

    const wrappedComponentName =
        Component.displayName || Component.name || 'Component';

    WithNotification.displayName = `withNotification(${wrappedComponentName})`;
    return WithNotification as ComponentType<P>;
};
