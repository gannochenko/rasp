import { InputContext as MVCInputContext } from '@gannochenko/express.mvc';

export interface CustomContext {
    grpc: any; // todo: fix me
}
export type Context = MVCInputContext<CustomContext>;
