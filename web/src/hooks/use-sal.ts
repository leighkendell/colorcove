import { useRef, useEffect } from 'react';
import { isBrowser } from '../utils/helpers';
import sal from 'sal.js';

const useSal = (pathname: string) => {
  // Sal.js
  const salInst = useRef(
    isBrowser
      ? sal({
          threshold: 0.15,
        })
      : null
  );

  // Re-enable sal on route change
  useEffect(() => {
    const sal = salInst.current;
    sal && sal.enable();

    return () => {
      sal && sal.disable();
    };
  }, [pathname]);
};

export default useSal;
