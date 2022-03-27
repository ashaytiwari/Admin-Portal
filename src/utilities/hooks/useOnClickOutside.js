import { useEffect } from 'react';

const useOnClickOutside = (ref, handler) => {

  useEffect(() => {

    function documentClickHandler(event) {

      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        // event.stopPropagation();
        return;
      }

      return handler(event);

    }

    document.addEventListener('mousedown', documentClickHandler);
    document.addEventListener('touchstart', documentClickHandler);

    return function unregisterEvents() {
      document.removeEventListener('mousedown', documentClickHandler);
      document.removeEventListener('touchstart', documentClickHandler);
    };

  }, [handler, ref]);
}

export default useOnClickOutside;