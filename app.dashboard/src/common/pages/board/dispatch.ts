import { LOAD, SHUTDOWN, UNLOAD } from './reducer';
import { Dispatch } from '../../store/type';
import { ServiceManager } from '../../lib';

export const mapDispatchToProps = (dispatch: Dispatch) => ({
    dispatchLoad: (serviceManager: ServiceManager) =>
        dispatch({
            type: LOAD,
            payload: {
                serviceManager,
            },
        }),
    dispatchUnload: () =>
        dispatch({
            type: UNLOAD,
            payload: {},
        }),
    dispatchShutdown: (serviceManager: ServiceManager, restart: boolean) =>
        dispatch({
            type: SHUTDOWN,
            payload: {
                restart,
                serviceManager,
            },
        }),
});
