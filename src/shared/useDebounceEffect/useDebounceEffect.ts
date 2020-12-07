import { useEffect, useCallback } from "react";

function useDebounceEffect(effect: any, deps: any, delay: number = 500) {
  const callback = useCallback(effect, deps);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}

export default useDebounceEffect;
