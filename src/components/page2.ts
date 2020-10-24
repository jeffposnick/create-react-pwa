import htm from 'htm';
import {VNode, h} from 'preact';

const html = htm.bind(h);

export function Page2() {
  return html`<h1>Page 2</h1>` as VNode;
}
