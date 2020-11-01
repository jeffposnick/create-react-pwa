import path from 'path';

import polka from 'polka';
import serveStatic from 'serve-static';

import {ssr} from '../lib/ssr';
import {end} from '../partials/end';
import {start} from '../partials/start';

polka()
  .use(serveStatic(path.join(__dirname, 'public')))
  .get('/*', (request, response) => {
    response.end(start() + ssr(request.path) + end());
  })
  .listen(3000);
