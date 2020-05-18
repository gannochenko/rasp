import { takeLatest, put, call } from 'redux-saga/effects';
import * as reducer from './reducer';
import { ServiceAction } from '../../store/type';
import { BoardService } from '../../services/board';

function* load(action: ServiceAction) {
    if (!action) {
        return;
    }
    const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        payload: { serviceManager },
    } = action;

    try {
        const data = {};
        yield put({ type: reducer.LOAD_SUCCESS, payload: { data } });
    } catch (error) {
        yield put({ type: reducer.LOAD_FAILURE, payload: error });
        if (__DEV__) {
            console.error(error);
        }
    }
}

function* shutdown(action: ServiceAction<{ restart: boolean }>) {
    if (!action) {
        return;
    }

    const {
        payload: { serviceManager, restart },
    } = action;

    const boardService = serviceManager.getService('board') as BoardService;

    try {
        const data = yield call(() => boardService.shutdown(restart));
        yield put({ type: reducer.LOAD_SUCCESS, payload: { data } });
    } catch (error) {
        yield put({ type: reducer.LOAD_FAILURE, payload: error });
        if (__DEV__) {
            console.error(error);
        }
    }
}

function* status(action: ServiceAction<{ restart: boolean }>) {
    if (!action) {
        return;
    }

    const {
        payload: { serviceManager },
    } = action;

    const boardService = serviceManager.getService('board') as BoardService;

    try {
        const result = (yield call(() => boardService.getStatus())).data
            .getStatus;
        if (!result.errors.length) {
            yield put({
                type: reducer.STATUS_UPDATE,
                payload: { ...result.data },
            });
        }

        //
    } catch (error) {
        if (__DEV__) {
            console.error(error);
        }
    }
}

export const boardPageSaga = function* watcher() {
    yield takeLatest(reducer.LOAD, load);
    yield takeLatest(reducer.SHUTDOWN, shutdown);
    yield takeLatest(reducer.STATUS, status);
};
