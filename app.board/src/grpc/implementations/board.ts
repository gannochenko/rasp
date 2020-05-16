export const boardImplementation = {
    Board: {
        shutdown: async (call: any) => {
            const {
                request: { restart },
            } = call;

            console.log('grpc restart:');
            console.log(restart);
        },
    },
};
