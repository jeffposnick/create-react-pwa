import {useEffect} from 'preact/hooks';

export function useDocumentTitle(title: string) {
  if (!document) {
    return;
  }

  useEffect(() => {
    document.title = title;
  }, [title]);
}
