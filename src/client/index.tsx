import {h, render} from 'preact';

import {App} from '../components/app';

export function bootstrap() {
  render(<App></App>, document.querySelector('main'));
  navigator.serviceWorker.register('/sw.js');
}
