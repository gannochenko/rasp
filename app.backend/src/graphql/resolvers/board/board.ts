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

            const boardClient = context.grpc.getBoard();

            const res = await boardClient.shutdown({ restart });

            console.log('result:');
            console.log(res);

            return result;
        },
    },
};
