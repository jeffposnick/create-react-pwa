import render from 'preact-render-to-string';
import Trouter from 'trouter';

import {Index} from './components/index';
import {Page1} from './components/page1';
import {Page2} from './components/page2';
import {end} from './partials/end';
import {start} from './partials/start';

const router = new Trouter();

router.get('/page1', () => start('Page 1') + render(Page1()) + end());
router.get('/page2', () => start('Page 2') + render(Page2()) + end());
router.get('/', () => start('Index') + render(Index()) + end());

export {router};
