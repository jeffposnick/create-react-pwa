import {h} from 'preact';

export function Index(props?: {path: string}) {
  return (
    <div>
      <h1>Index</h1>
      <ul>
        <li>
          <a href="/page1">Page 1</a>
        </li>
        <li>
          <a href="/page2">Page 2</a>
        </li>
      </ul>
    </div>
  );
}
