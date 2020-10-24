import {App} from '@tinyhttp/app';
import {logger} from '@tinyhttp/logger';
import render from 'preact-render-to-string';

import {Index} from './components/index.js';
import {Page1} from './components/page1.js';
import {Page2} from './components/page2.js';

const app = new App();

app
  .use(logger())
  .get('/page1', (_, res) => res.send(render(Page1())))
  .get('/page2', (_, res) => res.send(render(Page2())))
  .get('/', (_, res) => res.send(render(Index())))
  .listen(3000);
