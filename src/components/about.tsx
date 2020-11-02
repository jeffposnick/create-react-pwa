import {h} from 'preact';

import {useDocumentTitle} from '../lib/useDocumentTitle';

export function About({path}: {path: string}): h.JSX.Element {
  useDocumentTitle('About SO PWA');

  return (
    <div>
      <h3>About SO PWA</h3>
      <p>
        This is a sample
        <a href="https://developers.google.com/web/progressive-web-apps/">
          progressive web app
        </a>
        which uses the
        <a href="https://api.stackexchange.com/">Stack Exchange API</a> to fetch
        the top questions and answers from
        <a href="https://stackoverflow.com/">Stack Overflow</a> for a given tag.
      </p>
      <p>Under the hood, it's powered by the following technologies:</p>
      <ul>
        <li>
          Service worker generation and
          <a href="https://streams.spec.whatwg.org/">Streams API</a> logic via
          <a href="https://developers.google.com/web/tools/workbox/">Workbox</a>
          .
        </li>
        <li>
          Static and dynamic web hosting via
          <a href="https://firebase.google.com/docs/functions/">
            Firebase Cloud Functions
          </a>
          .
        </li>
        <li>
          "Universal" JavaScript via ES2015 source modules, bundled for the
          browser and <a href="https://nodejs.org/en/">Node</a> by
          <a href="https://rollupjs.org/">Rollup</a>, with
          <a href="https://babeljs.io/docs/plugins/preset-env/">
            babel-preset-env
          </a>
          ensuring compatibility with various runtimes.
        </li>
        <li>
          Shared server + service worker routing logic using
          <a href="https://expressjs.com/en/guide/routing.html">
            Express-style
          </a>
          patterns and the
          <a href="https://github.com/lukeed/regexparam">
            <code>regexparam</code>
          </a>
          library in the service worker.
        </li>
        <li>
          Shared server + service worker HTML generation logic, using
          <a href="https://github.com/popeindustries/lit-html-server">
            <code>lit-html-server</code>
          </a>
          to render the
          <a href="https://lit-html.polymer-project.org/">
            <code>lit-html</code>
          </a>{' '}
          templates.
        </li>
      </ul>
      <p>
        This project is open source, and
        <a href="https://github.com/GoogleChromeLabs/so-pwa/blob/master">
          available on GitHub
        </a>
        .
      </p>
    </div>
  );
}
