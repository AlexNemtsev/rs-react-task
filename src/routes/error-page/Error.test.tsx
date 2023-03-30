import { render } from '@testing-library/react';
import { test } from 'vitest';
import ErrorPage from './Error';
import { MemoryRouter } from 'react-router-dom';

const renderWithRouter = (component: JSX.Element) =>
  render(<MemoryRouter>{component}</MemoryRouter>);

test('About screen should be rendered', () => {
  const { getByText } = renderWithRouter(<ErrorPage />);
  const aboutTxt = getByText(/404/i);
  expect(aboutTxt).toBeInTheDocument;
});
