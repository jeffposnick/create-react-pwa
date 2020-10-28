export function start() {
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Loading...</title>
    <link rel="icon" href="/icon.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="theme-color" content="#0093c4">
    <meta name="Description" content="A progressive web app for reading Stack Overflow questions and answers.">
  </head>
  <body>
    <header>
      <a href="/">SO PWA</a>
      <a href="/about">About</a>
    </header>
    <img id="offline" src="/offline.svg">
    <main>`;
}
