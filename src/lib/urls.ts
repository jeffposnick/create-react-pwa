const PATH = `https://api.stackexchange.com/2.2/questions`;

// As per https://api.stackexchange.com/docs/throttle
// While this is a read-only, non-secret key, please register your own
// and replace this value if you fork this project!
const KEY = `LJ54sdY)tUYvfsHg2kwLvQ((`;
const SITE = 'stackoverflow';

export function listQuestionsForTag(tag: string, sort: string) {
  const url = new URL(PATH);

  url.searchParams.set('filter', '!C(o*VY))7BGSrm5xK');
  url.searchParams.set('key', KEY);
  url.searchParams.set('order', 'desc');
  url.searchParams.set('pagesize', '100');
  url.searchParams.set('site', SITE);
  url.searchParams.set('sort', sort);
  url.searchParams.set('tagged', tag);

  return url.href;
}

export function getQuestion(questionId: string) {
  const url = new URL(PATH);
  url.pathname += `/${questionId}`;

  url.searchParams.set(
    'filter',
    '!oDhDpbIIc)pcGHpmWvn_fa0Hu6PKHizd-W.RnKEVsIq',
  );
  url.searchParams.set('key', KEY);
  url.searchParams.set('site', SITE);

  return url.href;
}
