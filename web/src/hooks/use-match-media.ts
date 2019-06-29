import { useState, useEffect } from 'react';
import { isBrowser } from '../utils/helpers';

const useMatchMedia = (mediaQuery: string) => {
  const query = isBrowser ? window.matchMedia(mediaQuery) : null;
  const [isMatch, setIsMatch] = useState(query ? query.matches : false);

  useEffect(() => {
    if (query) {
      // Update state
      const onChange = (e: MediaQueryListEvent) => {
        setIsMatch(e.matches);
      };
      query.addListener(onChange);

      // Remove listener
      return () => {
        query.removeListener(onChange);
      };
    }
  }, [query]);

  return isMatch;
};

export default useMatchMedia;
