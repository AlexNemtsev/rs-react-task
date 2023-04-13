import { test } from 'vitest';
import ErrorPage from './Error';
import renderWithRouterAndRedux from '../../__tests__/render-with-router';

test('About screen should be rendered', () => {
  const { getByText } = renderWithRouterAndRedux(<ErrorPage />);
  const aboutTxt = getByText(/404/i);
  expect(aboutTxt).toBeInTheDocument;
});
