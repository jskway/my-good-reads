//import { expect } from 'chai';
import fetchUrl from "./fetchUrl";
//import sinon from 'sinon';
//import assert from 'assert';

declare global {
  namespace NodeJS {
    interface Global {
      fetch: any;
    }
  }
}
describe("Testing FetchUrl - Wrapper over fetch", () => {
  const res = [
    {
      id: "1",
      name: "Abc",
    },
  ];

  it("should perform basic fetch functions", () => {
    const mockFetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => res,
    });
    // Inject mock fetch into global
    global.fetch = mockFetch;

    fetchUrl("/api/v1/someUrl");

    expect(mockFetch).toHaveBeenCalled();
    expect(mockFetch).toHaveBeenCalledWith("/api/v1/someUrl", {});

    delete global.fetch;
  });

  it("should resolve with data for valid request", async () => {
    const mockFetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => res,
    });

    // Inject mock fetch into global
    global.fetch = mockFetch;

    const fetchResponse = await fetchUrl("/api/v1/someUrl");
    expect(fetchResponse).toEqual(res);

    delete global.fetch;
  });

  it(`should reject with data for fetch status returns ok false`, async () => {
    const mockFetch = jest.fn().mockResolvedValue({
      ok: false,
      json: () => res,
    });

    // Inject mock fetch into global
    global.fetch = mockFetch;

    //https://github.com/facebook/jest/issues/8254
    try {
      const fetchResponse = await fetchUrl("/api/v1/someUrl");
    } catch (e) {
      expect(e).toEqual(res);
    }

    delete global.fetch;
  });
});
