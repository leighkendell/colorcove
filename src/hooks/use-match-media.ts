import { useState, useEffect } from 'react';

export const useMatchMedia = (mediaQuery: string) => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(mediaQuery);

    // Set the initial state
    setIsMatch(query.matches);

    // Update state
    const onChange = (e: MediaQueryListEvent) => {
      setIsMatch(e.matches);
    };
    query.addListener(onChange);

    // Remove listener
    return () => {
      query.removeListener(onChange);
    };
  }, [mediaQuery]);

  return isMatch;
};
