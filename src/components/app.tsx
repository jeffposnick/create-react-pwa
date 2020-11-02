import {h} from 'preact';
import Router, {CustomHistory} from 'preact-router';

import {QuestionEntity, QuestionsForTagEntity} from '../lib/StackOverflowAPI';
import {About} from './about';
import {Index} from './index';
import {Navbar} from './navbar';
import {Question} from './question';

export function App({
  customHistory,
  initialQuestion,
  initialQuestionsForTag,
}: {
  initialQuestion?: QuestionEntity;
  customHistory?: CustomHistory;
  initialQuestionsForTag?: Array<QuestionsForTagEntity>;
}): h.JSX.Element {
  return (
    <div>
      <Navbar />
      <Router history={customHistory}>
        <About path="/about" />
        <Question
          path="/questions/:questionId"
          initialQuestion={initialQuestion}
        />
        <Index path="/" initialQuestionsForTag={initialQuestionsForTag} />
      </Router>
    </div>
  );
}
