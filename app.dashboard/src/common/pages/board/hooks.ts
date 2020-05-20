import { useCallback, useState, useEffect } from 'react';
import { BoardPagePropsType } from './type';

import { ACTION_RESTART, ACTION_HALT } from './constants';

export const useShutdown = (props: BoardPagePropsType) => {
    const { dispatchShutdown, serviceManager } = props;

    const [open, setOpen] = useState(false);
    const [actionType, setActionType] = useState(ACTION_RESTART);

    const onAskRestart = useCallback(() => {
        setActionType(ACTION_RESTART);
        setOpen(true);
    }, []);
    const onAskHalt = useCallback(() => {
        setActionType(ACTION_HALT);
        setOpen(true);
    }, []);
    const onCloseAsk = useCallback(() => setOpen(false), []);
    const onConfirm = useCallback(() => {
        setOpen(false);
        dispatchShutdown(serviceManager, actionType === ACTION_RESTART);
    }, [actionType, setOpen]);

    return {
        open,
        onAskRestart,
        onAskHalt,
        onCloseAsk,
        onConfirm,
        actionType,
    };
};

export const useStatus = (props: BoardPagePropsType) => {
    const { dispatchStatus, serviceManager, callId } = props;

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatchStatus(serviceManager);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [callId]);
};
