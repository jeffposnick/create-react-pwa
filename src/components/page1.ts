import htm from 'htm';
import {VNode, h} from 'preact';

const html = htm.bind(h);

export function Page1() {
  return html`<h1>Page 1</h1>` as VNode;
}
