import { SystemService } from '../../service/system';
import { IOService } from '../../service/io';

export const boardImplementation = {
    Board: {
        shutdown: async (call: any) => {
            const {
                request: { restart },
            } = call;

            const shutdownService = new SystemService();
            await shutdownService.shutdown(restart);
        },
        getStatus: async () => {
            const shutdownService = new SystemService();
            return shutdownService.getStatus();
        },
        getInfo: async () => {
            const shutdownService = new SystemService();
            return shutdownService.getInfo();
        },
        updateLEDArray: async () => {
            const shutdownService = new IOService();
            return shutdownService.updateLEDArray();
        },
    },
};
