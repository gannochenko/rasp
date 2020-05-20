import { NotificationContextPropsType } from '@gannochenko/ui';
import { ControllerProperties, PageState } from '../../store/type';
import { ServiceManager } from '../../lib';

export type BoardPageOwnPropsType = {};

export type BoardPagePropsType = BoardPageOwnPropsType & {
    dispatchShutdown: (serviceManager: ServiceManager, restart: boolean) => {};
    dispatchStatus: (serviceManager: ServiceManager) => {};
    cpuUsage: number;
    cpuTemperature: number;
    memoryAvailable: number;
    memoryFree: number;
    callId: number;
} & NotificationContextPropsType &
    ControllerProperties;

export type BoardPageState = {} & PageState;
