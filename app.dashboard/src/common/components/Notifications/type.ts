import { ReactNode, Ref } from 'react';
import { ObjectLiteral } from '../../../type';
import { EventEmitter } from 'events';

export type NotificationsPropsType = {
    children: Children;
    emitter: EventEmitter;
};

type Children = (params: {
    messages: MessageRecordWithRef[];
    onCloseMessage: (id: number) => void;
}) => ReactNode;

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

export type MessageRecordWithRef = MessageRecord & {
    ref: (ref: HTMLDivElement) => void;
};

export type MessageIdToRef = {
    [key: number]: HTMLDivElement;
};

export type Notify = (message: MessageInputType) => void;
