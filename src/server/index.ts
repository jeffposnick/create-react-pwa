import path from 'path';

import polka from 'polka';
import serveStatic from 'serve-static';

import {end} from '../partials/end';
import {start} from '../partials/start';
import {ssr} from '../ssr';

polka()
  .use(serveStatic(path.join(__dirname, 'public')))
  .get('/*', (request, response) => {
    response.end(start() + ssr(request.path) + end());
  })
  .listen(3000);
