import {h} from 'preact';
import {StateUpdater, useEffect, useState} from 'preact/hooks';

import {
  AnswerEntity,
  QuestionData,
  QuestionEntity,
} from '../lib/StackOverflowAPI';
import {getQuestion} from '../lib/urls';
import {useDocumentTitle} from '../lib/useDocumentTitle';
import {Loading} from './loading';

function Profile({
  link,
  creation_date,
  owner,
}: QuestionEntity | AnswerEntity): h.JSX.Element {
  return (
    <div class="profile">
      <img
        src={owner.profile_image}
        alt="Profile picture"
        crossOrigin={
          owner.profile_image.startsWith('https://www.gravatar.com/')
            ? 'anonymous'
            : undefined
        }
      />
      <a href={owner.link}>{owner.display_name}</a>
      at
      <a href={link}>{new Date(creation_date * 1000).toLocaleString()}</a>
    </div>
  );
}

function Answer(props: AnswerEntity): h.JSX.Element {
  return (
    <div>
      <Profile {...props} />
      <div
        dangerouslySetInnerHTML={{
          __html: props.body,
        }}
      />
    </div>
  );
}

export async function loadData(questionId: string): Promise<QuestionEntity> {
  const response = await fetch(getQuestion(questionId));
  const data: QuestionData = await response.json();
  return data.items[0] || null;
}

export function Question({
  initialQuestion = null,
  path,
  questionId,
}: {
  initialQuestion?: QuestionEntity;
  path: string;
  questionId?: string;
}): h.JSX.Element {
  const [question, setQuestion]: [
    question: QuestionEntity,
    setQuestion: StateUpdater<QuestionEntity>,
  ] = useState(initialQuestion);

  useEffect(() => {
    loadData(questionId).then((question) => setQuestion(question));
  }, [questionId]);

  if (question === null) {
    return <Loading />;
  }

  useDocumentTitle(question.title);

  return (
    <div>
      <h3>{question.title}</h3>
      <Profile {...question}></Profile>
      <div
        dangerouslySetInnerHTML={{
          __html: question.body,
        }}
      />
      <div>
        {question.answers
          .sort((a, b) => (a.score < b.score ? 1 : 0))
          .map((answer) => (
            <Answer {...answer} />
          ))}
      </div>
    </div>
  );
}
