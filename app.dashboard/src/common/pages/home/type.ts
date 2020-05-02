import { NotificationContextPropsType } from '@gannochenko/ui';
import { ControllerProperties, PageState } from '../../store/type';
import { Route } from '../../type';

export type HomePagePropsAlt = {
    route: Route;
};

export type HomePageProperties = HomePagePropsAlt &
    NotificationContextPropsType &
    ControllerProperties;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HomePageState extends PageState {}
