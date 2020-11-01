import {h} from 'preact';
import Router, {CustomHistory} from 'preact-router';

import {About} from './about';
import {Index} from './index';
import {Question} from './question';

export function App({customHistory}: {customHistory?: CustomHistory}) {
  return (
    <Router history={customHistory}>
      <About path="/about"></About>
      <Question path="/questions/:questionId"></Question>
      <Index path="/"></Index>
    </Router>
  );
}
