import { takeLatest, put, call } from 'redux-saga/effects';
import * as reducer from './reducer';
import { ServiceAction } from '../../store/type';
import { BoardService } from '../../services/board';

function* load(action: ServiceAction) {
    if (!action) {
        return;
    }

    yield put({
        type: reducer.LOAD_SUCCESS,
        payload: { data: {} },
    });
}

function* update(action: ServiceAction) {
    if (!action) {
        return;
    }
    const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        payload: { serviceManager },
    } = action;

    const boardService = serviceManager.getService('board') as BoardService;

    try {
        const result = yield call(() => boardService.updateLEDArray());
        if (result.errors.length) {
            const error = result.errors[0];
            yield put({ type: reducer.LOAD_FAILURE, payload: error });
            if (__DEV__) {
                console.error(error);
            }
        } else {
            yield put({
                type: reducer.LOAD_SUCCESS,
                payload: { data: result.data },
            });
        }
    } catch (error) {
        yield put({ type: reducer.LOAD_FAILURE, payload: error });
        if (__DEV__) {
            console.error(error);
        }
    }
}

export const ledsPageSaga = function* watcher() {
    yield takeLatest(reducer.LOAD, load);
};
