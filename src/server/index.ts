import path from 'path';

import polka from 'polka';
import serveStatic from 'serve-static';

import {router} from '../router';

polka()
  .use(serveStatic(path.join(__dirname, 'public')))
  .get('/*', (request, response) => {
    const {handlers} = router.find('GET', request.path);
    if (handlers.length > 0) {
      response.end(handlers[0]());
    } else {
      response.statusCode = 404;
      response.end('Route not found.');
    }
  })
  .listen(3000);
