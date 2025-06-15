import { useEffect } from 'react';

const useDocumentTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${title} | Golconda Express`;

    return () => {
      document.title = prevTitle;
    };
  }, [title]);
};

export default useDocumentTitle;