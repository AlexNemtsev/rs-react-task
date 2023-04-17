import { test } from 'vitest';
import ErrorPage from './Error';
import renderWithRouterAndRedux from '../../../tests/render-with-router-redux';

test('About screen should be rendered', () => {
  const { getByText } = renderWithRouterAndRedux(<ErrorPage />);
  const aboutTxt = getByText(/404/i);
  expect(aboutTxt).toBeInTheDocument;
});
