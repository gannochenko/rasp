import { NotificationContextPropsType } from '@gannochenko/ui';
import { ControllerProperties, PageState } from '../../store/type';
import { ServiceManager } from '../../lib';

export type BoardPageOwnPropsType = {};

export type BoardPagePropsType = BoardPageOwnPropsType & {
    dispatchShutdown: (serviceManager: ServiceManager, restart: boolean) => {};
} & NotificationContextPropsType &
    ControllerProperties;

export type BoardPageState = {} & PageState;
