import { Result } from '@gannochenko/express.mvc';
import { ShutdownBoardArguments } from './type';
import { Context } from '../../type';

export const boardResolvers = {
    Mutation: {
        shutdownBoard: async (
            source: any,
            args: ShutdownBoardArguments,
            context: Context /* , ast: any */,
        ) => {
            const { restart } = args;
            const result = new Result();

            console.log(restart);

            return result;
        },
    },
};
