import render from 'preact-render-to-string';
import {CustomHistory} from 'preact-router';

import {App} from './components/app';

function ssr(pathname: string, search = '') {
  const customHistory: CustomHistory = {
    listen: () => () => {},
    location: {pathname, search},
    push: () => {},
    replace: () => {},
  };
  return render(App(customHistory));
}

export {ssr};
