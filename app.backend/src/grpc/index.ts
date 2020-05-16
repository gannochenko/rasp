// @ts-ignore
import grpc from 'grpc';

import serverSchema from './services/board.proto';
import { Callback } from './type';

const calbackify = (fn: (call: any) => Promise<unknown>) => (
    call: any,
    callback: Callback,
) => {
    fn(call)
        .then((res: unknown) => callback(null, res))
        .catch((error: Error) => callback(error, null));
};

export const run = () => {
    const definition = grpc.loadPackageDefinition(serverSchema);

    const client = new definition.Board(
        'raspberrypi.fritz.box:50051',
        grpc.credentials.createInsecure(),
    );
    console.log(client);

    client.shutdown({ restart: false }, (err: any, res: any) => {
        console.log(err);
        console.log(res);
    });
};
