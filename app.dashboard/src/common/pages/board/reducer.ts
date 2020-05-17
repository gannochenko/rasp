import { BoardPageState } from './type';
import { Action } from '../../store/type';

export const LOAD = 'board.load';
export const LOAD_SUCCESS = 'board.load.success';
export const LOAD_FAILURE = 'board.load.failure';
export const UNLOAD = 'board.unload';
export const SHUTDOWN = 'board.shutdown';

export const initialState: BoardPageState = {
    loading: false,
    ready: false,
    error: null,
};

export const boardPageReducer = (
    state: BoardPageState = initialState,
    action: Action,
) => {
    switch (action.type) {
        case LOAD:
        case SHUTDOWN:
            return { ...state, loading: true };
        case LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                ready: true,
                error: null,
                ...action.payload,
            };
        case LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                ready: true,
                error: action.payload,
            };
        case UNLOAD:
            return { ...initialState };
        default:
            return state;
    }
};
