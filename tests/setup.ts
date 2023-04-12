import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import photosMock from './tests-data/photos';

expect.extend(matchers);

beforeEach(() => {
  vi.stubGlobal(
    'fetch',
    vi.fn(
      () =>
        new Promise((resolve) =>
          resolve({
            json: () => new Promise((resolve) => resolve(photosMock)),
          })
        )
    )
  );
});

afterEach(() => {
  cleanup();
});
