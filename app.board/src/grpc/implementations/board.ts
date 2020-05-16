import { ShutdownService } from '../../service/shutdown';

export const boardImplementation = {
    Board: {
        shutdown: async (call: any) => {
            const {
                request: { restart },
            } = call;

            const shutdownService = new ShutdownService();
            await shutdownService.shutdown(restart);
        },
    },
};
