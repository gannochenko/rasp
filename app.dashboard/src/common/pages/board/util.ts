export const getMemoryUsage = (memoryAvailable: number, memoryFree: number) => {
    if (!memoryAvailable || !memoryFree) {
        return {
            value: 0,
            percent: 0,
        };
    }

    return {
        value: memoryAvailable - memoryFree,
        percent: Math.round((1 - memoryFree / memoryAvailable) * 100),
    };
};

export const round = (value: number) => Math.round(value * 100) / 100;
