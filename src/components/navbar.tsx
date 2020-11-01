import {h} from 'preact';

export function Navbar() {
  return (
    <div>
      <header>
        <a href="/">SO PWA</a>
        <a href="/about">About</a>
      </header>
      <img id="offline" src="/offline.svg" />
    </div>
  );
}
