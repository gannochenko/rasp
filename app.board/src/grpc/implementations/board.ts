export const boardImplementation = {
    Board: {
        shutdown: async (call: any, context: any) => {
            console.log(call);
            console.log(context);
        },
    },
};
