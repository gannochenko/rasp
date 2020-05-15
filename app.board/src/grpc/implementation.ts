import { ObjectLiteral } from '../type';

// when going with client-only, leave the implementation object empty
export const implementation = {
    Board: {
        Generator: {
            generateNumber: async ({ request: { start, end } }: any) => {
                const range = end - start;
                return { number: Math.round(Math.random() * range) + start };
            },
        },
    },
} as ObjectLiteral;
