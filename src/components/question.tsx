import {h} from 'preact';
import {StateUpdater, useEffect, useState} from 'preact/hooks';

import {
  AnswerEntity,
  QuestionData,
  QuestionEntity,
} from '../lib/StackOverflowAPI';
import {getQuestion} from '../lib/urls';

function Profile({link, creation_date, owner}: QuestionEntity | AnswerEntity) {
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
      <a href={link}>{creation_date}</a>
    </div>
  );
}

function Answer(props: AnswerEntity) {
  return (
    <div>
      <Profile {...props} />
      <div>{props.body}</div>
    </div>
  );
}

export function Question({
  path,
  questionId,
}: {
  path: string;
  questionId?: string;
}) {
  const [question, setQuestion]: [
    question: QuestionEntity,
    setQuestion: StateUpdater<QuestionEntity>,
  ] = useState(null);

  useEffect(() => {
    fetch(getQuestion(questionId))
      .then((res) => res.json())
      .then((data: QuestionData) => setQuestion(data.items[0] || null));
  }, []);

  return (
    <div>
      <h3>{question.title}</h3>
      <Profile {...question}></Profile>
      <div>{question.body}</div>
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
