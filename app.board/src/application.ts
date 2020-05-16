import '@babel/polyfill';
import { logInfo } from '@gannochenko/etc';
import { useControllers } from '@gannochenko/express.mvc';
import helmet from 'helmet';
import express from 'express';
import process from 'process';

import { useErrorHandler } from './lib/error-handler';
import { useCORS } from './lib/cors';
import { useMetrics } from './lib/metrics';

import { controllers } from './controller';
import { useGRPC } from './grpc';

(async () => {
    const app = express();
    useErrorHandler(app);

    const host = process.env.NETWORK__HOST || 'localhost';
    const port = process.env.PORT || process.env.HTTP__PORT || 3000;

    app.set('host', host);
    app.set('port', port);

    await useCORS(app);
    useMetrics(app);

    app.use(helmet());

    const gRPCClients = useGRPC(app);

    useControllers(app, controllers, async () => ({
        grpc: gRPCClients,
    }));

    const server = app.listen({ port }, () => {
        logInfo(`🚀 Board is ready at http://${host}:${port}`);
    });

    process.on('SIGTERM', () => {
        server.close((error) => {
            if (error) {
                console.error(error);
                process.exit(1);
            }

            process.exit(0);
        });
    });
})();
