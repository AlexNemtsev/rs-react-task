import { render } from '@testing-library/react';
import { test } from 'vitest';
import AboutPage from './About';

test('About screen should be rendered', () => {
  const { getByText } = render(<AboutPage />);
  const aboutTxt = getByText(/about us/i);
  expect(aboutTxt).toBeInTheDocument;
});
