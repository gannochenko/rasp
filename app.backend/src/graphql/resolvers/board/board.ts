import { Result } from '@gannochenko/express.mvc';
import { ShutdownBoardArguments } from './type';
import { Context } from '../../type';

export const boardResolvers = {
    Query: {
        getBoardStatus: async (
            source: any,
            args: ShutdownBoardArguments,
            context: Context /* , ast: any */,
        ) => {
            const result = new Result();

            result.data = context.grpc
                .getBoard()
                .getStatus({})
                .catch((error: Error) =>
                    result.errors.push({
                        code: 'failure',
                    }),
                );

            return result;
        },
        getBoardInfo: async (
            source: any,
            args: ShutdownBoardArguments,
            context: Context /* , ast: any */,
        ) => {
            const result = new Result();

            result.data = context.grpc
                .getBoard()
                .getInfo({})
                .catch((error: Error) =>
                    result.errors.push({
                        code: 'failure',
                    }),
                );

            return result;
        },
    },
    Mutation: {
        shutdownBoard: async (
            source: any,
            args: ShutdownBoardArguments,
            context: Context /* , ast: any */,
        ) => {
            const { restart } = args;
            const result = new Result();

            await context.grpc.getBoard().shutdown({ restart });

            return result;
        },
    },
};
