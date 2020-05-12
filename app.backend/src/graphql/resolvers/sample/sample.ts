import { Result } from '@gannochenko/express.mvc';
import { GetSampleArguments, PutSampleArguments } from './type';
import { SampleService } from '../../../service/sample';
import { Context } from '../../type';

export const sampleResolvers = {
    Query: {
        getSample: async (
            source: any,
            args: GetSampleArguments,
            context: Context /* , ast: any */,
        ) => {
            const { id } = args;
            const result = new Result();

            const sampleService = new SampleService();

            result.data = await sampleService.getById(id);

            return result;
        },
    },
    Mutation: {
        putSample: async (
            source: any,
            args: PutSampleArguments,
            context: Context /* , ast: any */,
        ) => {
            const { data } = args;
            const result = new Result();

            const sampleService = new SampleService();

            result.data = await sampleService.create(data);

            return result;
        },
    },
};
