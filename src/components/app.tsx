import {h} from 'preact';
import Router, {CustomHistory} from 'preact-router';

import {Index} from './index';
import {Page1} from './page1';
import {Page2} from './page2';

export function App({customHistory}: {customHistory?: CustomHistory}) {
  return (
    <Router history={customHistory}>
      <Page1 path="/page1"></Page1>
      <Page2 path="/page2"></Page2>
      <Index path="/"></Index>
    </Router>
  );
}
