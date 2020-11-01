import {ssr} from '../lib/ssr';
import {end} from '../partials/end';
import {start} from '../partials/start';

declare const self: ServiceWorkerGlobalScope;

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    const url = new URL(event.request.url);
    const body = start() + ssr(url.pathname) + end();
    event.respondWith(
      new Response(body, {headers: {'content-type': 'text/html'}}),
    );
  }
});
