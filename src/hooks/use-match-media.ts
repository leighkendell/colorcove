import { useState, useEffect } from 'react';

export const useMatchMedia = (mediaQuery: string) => {
  const query = window.matchMedia(mediaQuery);
  const [isMatch, setIsMatch] = useState(query.matches);

  useEffect(() => {
    // Update state
    const onChange = (e: MediaQueryListEvent) => {
      setIsMatch(e.matches);
    };
    query.addListener(onChange);

    // Remove listener
    return () => {
      query.removeListener(onChange);
    };
  }, [query]);

  return isMatch;
};
