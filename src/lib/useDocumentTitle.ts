import {useEffect} from 'preact/hooks';

export function useDocumentTitle(title: string): void {
  if (typeof document === 'undefined') {
    return;
  }

  useEffect(() => {
    document.title = title;
  }, [title]);
}
