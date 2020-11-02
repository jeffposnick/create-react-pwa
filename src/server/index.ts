import 'cross-fetch/polyfill';

import path from 'path';

import polka from 'polka';
import serveStatic from 'serve-static';

import {ssr} from '../lib/ssr';
import {end} from '../partials/end';
import {start} from '../partials/start';

const port = process.env.PORT || 3000;

polka()
  .use(serveStatic(path.join(__dirname, 'public')))
  .get('/*', (request, response) => {
    response.end(start() + ssr(request.path) + end());
  })
  .listen(port, (error: Error) => {
    if (error) {
      throw error;
    }
    console.log(`Listening on http://localhost:${port}/`);
  });
