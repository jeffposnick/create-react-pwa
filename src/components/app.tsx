import {h} from 'preact';
import Router, {CustomHistory, RouterOnChangeArgs} from 'preact-router';

import {DEFAULT_SORT, DEFAULT_TAG} from '../lib/constants';
import {QuestionEntity, QuestionsForTagEntity} from '../lib/StackOverflowAPI';
import {About} from './about';
import {Index, loadData as loadIndexData} from './index';
import {Navbar} from './navbar';
import {Question, loadData as loadQuestionData} from './question';

let initialQuestionsForTag: Array<QuestionsForTagEntity>;
let initialQuestion: QuestionEntity;

async function fetchInitialDataForRoute({current}: RouterOnChangeArgs) {
  switch (current.type) {
    case Index: {
      initialQuestionsForTag = await loadIndexData(DEFAULT_TAG, DEFAULT_SORT);
      break;
    }

    case Question: {
      initialQuestion = await loadQuestionData(
        (current.props as any).questionId,
      );
      break;
    }
  }
}

export function App({
  customHistory,
}: {
  customHistory?: CustomHistory;
}): h.JSX.Element {
  return (
    <div>
      <Navbar />
      <Router history={customHistory} onChange={fetchInitialDataForRoute}>
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
