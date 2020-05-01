import { HTMLAttributes } from 'react';
import { MessageRecordWithRef } from '../Notifications/type';

export type NotificationUIPropsType = {
    messages: MessageRecordWithRef[];
    onCloseMessage: (id: number) => void;
} & HTMLAttributes<HTMLElement>;

export type MessageIconType = 'info' | 'error' | 'offline' | 'confirm';

export type MessageIcon = {
    icon?: string;
    type?: MessageIconType;
};
