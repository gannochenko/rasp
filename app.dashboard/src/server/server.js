import express from 'express';
// import React from 'react';
import helmet from 'helmet';
import path from 'path';
import { useErrorHandler } from './error-handler';

import { useCORS } from './cors';
import { useMetrics } from './metrics';
import { Template } from './template';

// import { renderToString } from 'react-dom/server';
// import Application from "../common/Application";

export const app = express();
// eslint-disable-next-line react-hooks/rules-of-hooks
useErrorHandler(app);

const host = process.env.NETWORK__HOST || 'localhost';
const port = process.env.PORT || 3000;

app.set('host', host);
app.set('port', port);

// eslint-disable-next-line react-hooks/rules-of-hooks
useCORS(app);
app.use(helmet());

// eslint-disable-next-line react-hooks/rules-of-hooks
useMetrics(app);

app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/health', (req, res) => {
    res.send('1');
});

const template = new Template();

// todo: use renderer here
app.get('*', async (req, res) => {
    // todo: ssr is not ready yet
    // const application = renderToString(<Application />);

    // todo: use cache here
    res.send(await template.get());
});
