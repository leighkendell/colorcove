import { useEffect, useRef } from 'react';

const useEventListener = (
  eventName: string,
  handler: (event: Event) => void,
  element: React.RefObject<HTMLElement>
) => {
  // Create a ref that stores handler
  const savedHandler = useRef(handler);

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    if (savedHandler.current) {
      savedHandler.current = handler;
    }
  }, [handler]);

  useEffect(() => {
    const el = element.current;

    if (el) {
      // Make sure element supports addEventListener
      const isSupported = el.addEventListener;
      if (!isSupported) return;

      // Create event listener that calls handler function stored in ref
      const eventListener: EventListenerOrEventListenerObject = event =>
        savedHandler.current(event);

      // Add event listener
      el.addEventListener(eventName, eventListener);

      // Remove event listener on cleanup
      return () => {
        el.removeEventListener(eventName, eventListener);
      };
    }
  }, [eventName, element]); // Re-run if eventName or element changes
};

export default useEventListener;
