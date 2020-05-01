import React, { ComponentType } from 'react';
import { MessageInputType, NotificationReference } from './type';

export const NotificationContext = React.createContext<NotificationReference>({
    current: null,
});
export const withNotification = (Component: ComponentType) => {
    const WithNotification = (props: any) => (
        <NotificationContext.Consumer>
            {(reference: NotificationReference) => (
                <Component
                    {...props}
                    notify={(messageInput: MessageInputType) =>
                        reference.current &&
                        reference.current.notify(messageInput)
                    }
                />
            )}
        </NotificationContext.Consumer>
    );

    const wrappedComponentName =
        Component.displayName || Component.name || 'Component';

    WithNotification.displayName = `withNotification(${wrappedComponentName})`;
    return WithNotification;
};
