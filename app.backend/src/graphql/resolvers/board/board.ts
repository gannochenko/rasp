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

            const res = await context.grpc.getBoard().shutdown({ restart });

            console.log('result:');
            console.log(res);

            return result;
        },
    },
};
