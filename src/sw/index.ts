import {ssr} from '../lib/ssr';
import {end} from '../partials/end';
import {start} from '../partials/start';

declare const self: ServiceWorkerGlobalScope;

function generateSSRResponse(pathname: string) {
  return new Response(start() + ssr(pathname) + end(), {
    headers: {'content-type': 'text/html'},
  });
}

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    const url = new URL(event.request.url);
    event.respondWith(generateSSRResponse(url.pathname));
  }
});
