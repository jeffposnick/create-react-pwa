import {HTTPMethod} from 'trouter';

import {router} from '../router';

declare const self: ServiceWorkerGlobalScope;

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    const url = new URL(event.request.url);
    const {handlers} = router.find(
      event.request.method as HTTPMethod,
      url.pathname,
    );

    if (handlers.length > 0) {
      const body = handlers[0]();
      event.respondWith(
        new Response(body, {headers: {'content-type': 'text/html'}}),
      );
    } else {
      event.respondWith(
        new Response('Route not found.', {
          status: 404,
          headers: {'content-type': 'text/plain'},
        }),
      );
    }
  }
});
