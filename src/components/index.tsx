import {h} from 'preact';
import {StateUpdater, useEffect, useState} from 'preact/hooks';

import {DEFAULT_SORT, DEFAULT_TAG, SORT_ORDERS} from '../lib/constants';
import {
  QuestionsForTagData,
  QuestionsForTagEntity,
} from '../lib/StackOverflowAPI';
import {getQuestion, listQuestionsForTag} from '../lib/urls';
import {useDocumentTitle} from '../lib/useDocumentTitle';
import {Loading} from './loading';

function getTitle(tag: string, sort: string) {
  return (
    (sort === SORT_ORDERS.VOTES ? 'Top' : 'Active') + ` "${tag}" Questions`
  );
}

function QuestionCard({question_id, title}: QuestionsForTagEntity) {
  return (
    <a
      class="card"
      href={`/questions/${question_id}`}
      data-cache-url={getQuestion(`${question_id}`)}
    >
      {title}
    </a>
  );
}

export function Index({
  path,
  sort = DEFAULT_SORT,
  tag = DEFAULT_TAG,
}: {
  path: string;
  sort?: string;
  tag?: string;
}) {
  const [items, setItems]: [
    items: Array<QuestionsForTagEntity>,
    setItems: StateUpdater<Array<QuestionsForTagEntity>>,
  ] = useState([]);

  useEffect(() => {
    fetch(listQuestionsForTag(tag, sort))
      .then((res) => res.json())
      .then((data: QuestionsForTagData) =>
        setItems((data && data.items) || []),
      );
  }, [sort, tag]);

  const title = getTitle(tag, sort);
  useDocumentTitle(title);

  return (
    <div>
      <h3>{title}</h3>
      <form method="GET">
        <label for="tag">Switch to tag:</label>
        <input type="text" name="tag" placeholder={DEFAULT_TAG}></input>
      </form>
      {items.length === 0 ? (
        <Loading />
      ) : (
        <div id="questions">
          {items.map((item) => (
            <QuestionCard {...item} />
          ))}
        </div>
      )}
    </div>
  );
}
