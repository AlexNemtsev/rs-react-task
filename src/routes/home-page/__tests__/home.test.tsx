// import { test } from 'vitest';
// import React from 'react';
import { render } from '@testing-library/react';
import Home from '../home';

test('render iphone 9 card react link', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/iphone 9/i);
  expect(linkElement).toBeInTheDocument();
});
