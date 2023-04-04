import { test } from 'vitest';
import ErrorPage from './Error';
import renderWithRouter from '../../__tests__/render-with-router';

test('About screen should be rendered', () => {
  const { getByText } = renderWithRouter(<ErrorPage />);
  const aboutTxt = getByText(/404/i);
  expect(aboutTxt).toBeInTheDocument;
});
