import { NotificationContextPropsType } from '@gannochenko/ui';
import { ControllerProperties, PageState } from '../../store/type';

export type LedsPageOwnPropsType = {};

export type LedsPagePropsType = LedsPageOwnPropsType &
    NotificationContextPropsType &
    ControllerProperties;

export type LedsPageState = {} & PageState;
