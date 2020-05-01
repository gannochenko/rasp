import { HTMLAttributes, MutableRefObject, ReactNode } from 'react';
import { ObjectLiteral } from '../../../type';
import { Notifications } from './Notifications';

export type NotificationsPropsType = {
    children: Children;
    ref: NotificationReference;
};

type Children = (params: { closeMessage: (id: number) => void }) => ReactNode;

export type MessageType = {
    text: string;
    type?: string;
    code?: string;
    icon?: string;
    closeable?: boolean;
    lifeTime?: number;
    props?: ObjectLiteral;
};

export type MessageInputType = MessageType | string;

export type MessageRecord = {
    id: number;
    closeable: boolean;
    closing: boolean;
} & MessageType;

export type MessageIdToRef = {
    [key: number]: HTMLDivElement;
};

export type NotificationReference = MutableRefObject<Notifications | undefined>;
