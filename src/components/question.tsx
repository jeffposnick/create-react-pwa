import {h} from 'preact';

function Profile({
  imageUrl,
  date,
  profileLink,
  displayName,
  anchorLink,
}: {
  imageUrl: string;
  date: string;
  profileLink: string;
  displayName: string;
  anchorLink: string;
}) {
  return (
    <div class="profile">
      <img src="${imageUrl}"
           alt="Profile picture"
           ?crossorigin=${
            imageUrl && imageUrl.startsWith('https://www.gravatar.com/')
          }
      <a href="${profileLink}">${displayName}</a>
      at
      <a href="${anchorLink}">${date}</a>
    </div>);
}

function QuestionCard({id, title}: {id: string; title: string}) {
  return html`
    <a class="card" href="/questions/${id}" data-cache-url="${getQuestion(id)}">
      ${title}
    </a>
  `;
}

export function Question(props: {path: string; questionId?: string}) {
  return <h1>Page 2</h1>;
}
