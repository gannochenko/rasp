import { NotificationContextPropsType } from '@gannochenko/ui';
import { ControllerProperties, PageState } from '../../store/type';

export type BoardPageOwnPropsType = {};

export type BoardPagePropsType = BoardPageOwnPropsType &
    NotificationContextPropsType &
    ControllerProperties;

export type BoardPageState = {} & PageState;
