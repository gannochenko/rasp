import { LedsPageState } from './type';
import { Action } from '../../store/type';

export const LOAD = 'leds.load';
export const LOAD_SUCCESS = 'leds.load.success';
export const LOAD_FAILURE = 'leds.load.failure';
export const UNLOAD = 'leds.unload';

export const initialState: LedsPageState = {
    loading: false,
    ready: false,
    error: null,
};

export const ledsPageReducer = (
    state: LedsPageState = initialState,
    action: Action,
) => {
    switch (action.type) {
        case LOAD:
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
