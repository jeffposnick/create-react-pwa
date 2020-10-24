import htm from 'htm';
import {VNode, h} from 'preact';

const html = htm.bind(h);

export function Index() {
  return html`<h1>Index</h1>` as VNode;
}
