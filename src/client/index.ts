import {h, render} from 'preact';

import {App} from '../components/app';

console.log('start');
render(h(App, undefined), document.querySelector('main'));
console.log('done');
