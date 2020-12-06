const debounce = (fn: (...params: any[]) => any, time: number) => {
  let timeoutId: number | undefined = undefined;

  return function (this: any, ...args: any[]) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(() => {
      fn.apply(this, args);
    }, time);
  };
};

export default debounce;
