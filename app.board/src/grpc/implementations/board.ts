import { SystemService } from '../../service/system';

export const boardImplementation = {
    Board: {
        shutdown: async (call: any) => {
            const {
                request: { restart },
            } = call;

            const shutdownService = new SystemService();
            await shutdownService.shutdown(restart);
        },
    },
};