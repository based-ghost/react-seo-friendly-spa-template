import { useRef, useEffect } from 'react';

export const useUpdateEffect: typeof useEffect = (effect, deps): void => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      return effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useUpdateEffect;
