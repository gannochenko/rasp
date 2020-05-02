import { History } from 'history';
import { Store } from 'redux';
import { Error } from '../type';
import { Client } from '../lib';
import { Nullable, ObjectLiteral } from '../../type';

export interface StoreParameters {
    history: History<any>;
    onChange: (parameters: { store: Store; unsubscribe: () => void }) => void;
}

export type PageState = {
    loading: boolean;
    ready: boolean;
    error: Nullable<Error[]>;
};

export interface Action<P = ObjectLiteral> {
    type: string;
    payload: P;
}

export type LoadAction = Action<Partial<{ client: Client }>>;

export type ControllerProperties = {
    ready: boolean;
    offline: boolean;
    client: Client;
    error: Nullable<Error[]>;
    dispatch?: (action: Action) => void;
    dispatchLoad?: DispatchLoad;
    dispatchUnload?: DispatchUnload;
};

export type Dispatch = (action: Action) => void;

export type DispatchLoad = (
    client?: Client,
    parameters?: ObjectLiteral,
) => void;

export type DispatchUnload = () => void;
