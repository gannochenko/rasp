import { History } from 'history';
import { Store } from 'redux';
import { Error } from '../type';
import { ServiceManager } from '../lib';
import { Nullable, ObjectLiteral } from '../../type';

export type StoreParameters = {
    history: History<any>;
    onChange: (parameters: { store: Store; unsubscribe: () => void }) => void;
};

export type PageState = {
    loading: boolean;
    ready: boolean;
    error: Nullable<Error[]>;
};

export type Action<P = ObjectLiteral> = {
    type: string;
    payload: P;
};

export type ServiceAction<P = {}> = Action<
    { serviceManager: ServiceManager } & P
>;

export type ControllerProperties = PageState & {
    offline: boolean;
    serviceManager: ServiceManager;
    dispatch?: (action: Action) => void;
    dispatchLoad?: DispatchLoad;
    dispatchUnload?: DispatchUnload;
};

export type Dispatch = (action: Action) => void;

export type DispatchLoad = (
    serviceManager?: ServiceManager,
    parameters?: ObjectLiteral,
) => void;

export type DispatchUnload = () => void;
