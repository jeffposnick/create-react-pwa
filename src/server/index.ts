import path from 'path';

import polka from 'polka';
import render from 'preact-render-to-string';
import serveStatic from 'serve-static';

import {Index} from '../components/index';
import {Page1} from '../components/page1';
import {Page2} from '../components/page2';
import {end} from '../partials/end';
import {start} from '../partials/start';

polka()
  .use(serveStatic(path.join(__dirname, 'public')))
  .get('/page1', (request, response) =>
    response.end(start('Page 1 (Server)') + render(Page1()) + end()),
  )
  .get('/page2', (request, response) =>
    response.end(start('Page 2 (Server)') + render(Page2()) + end()),
  )
  .get('/', (request, response) =>
    response.end(start('Index (Server)') + render(Index()) + end()),
  )
  .listen(3000);
