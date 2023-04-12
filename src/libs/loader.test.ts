import { test } from 'vitest';
import UnsplashLoader from './loader';
import photosMock from '../../tests/tests-data/photos';

test('getPhotos empty string should return photosMock object', async () => {
  const response = await UnsplashLoader.getPhotos('');
  const data = await response.json();
  expect(data).toBe(photosMock);
});
