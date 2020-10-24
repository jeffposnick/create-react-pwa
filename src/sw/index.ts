import render from 'preact-render-to-string';

import {Index} from '../components/index';
import {Page1} from '../components/page1';
import {Page2} from '../components/page2';
import {end} from '../partials/end';
import {start} from '../partials/start';

declare const self: ServiceWorkerGlobalScope;

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    if (event.request.url.endsWith('/page1')) {
      event.respondWith(
        new Response(start('Page 1 (SW)') + render(Page1()) + end(), {
          headers: {'content-type': 'text/html'},
        }),
      );
    } else if (event.request.url.endsWith('/page2')) {
      event.respondWith(
        new Response(start('Page 2 (SW)') + render(Page2()) + end(), {
          headers: {'content-type': 'text/html'},
        }),
      );
    } else if (event.request.url.endsWith('/')) {
      event.respondWith(
        new Response(start('Index (SW)') + render(Index()) + end(), {
          headers: {'content-type': 'text/html'},
        }),
      );
    }
  }
});
