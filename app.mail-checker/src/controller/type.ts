import { InputContext as MVCInputContext } from '@gannochenko/express.mvc';
import { Connection } from 'typeorm';

export interface CustomContext {
    connection: Connection;

    grpc: any; // todo: fix me
}
export type Context = MVCInputContext<CustomContext>;
