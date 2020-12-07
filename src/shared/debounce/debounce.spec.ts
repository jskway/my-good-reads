import debounce from "./debounce";

jest.useFakeTimers();

describe("debounce", () => {
  let fn: jest.Mock;
  let debouncedFn: Function;

  beforeEach(() => {
    fn = jest.fn();
    debouncedFn = debounce(fn, 1000);
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  test("waits for 1 second between executions", () => {
    debouncedFn();
    expect(fn).toBeCalledTimes(0);

    jest.advanceTimersByTime(1000);
    expect(fn).toBeCalledTimes(1);

    debouncedFn();
    expect(fn).toBeCalledTimes(1);

    jest.advanceTimersByTime(1000);
    expect(fn).toBeCalledTimes(2);
  });

  test("executes just once", () => {
    for (let i = 0; i < 100; i++) {
      debouncedFn();
    }

    jest.runAllTimers();

    expect(fn).toBeCalledTimes(1);
  });
});
